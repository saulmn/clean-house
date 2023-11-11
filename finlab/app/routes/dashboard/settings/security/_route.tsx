import type { V2_MetaFunction, ActionArgs } from "@remix-run/node";
import {
  Card,
  Button,
  Input,
  CardHeader,
  CardTitle,
  CardFooter,
  buttonVariants,
  CardContent,
} from "~/components/ui";
import bcrypt from "bcryptjs";
import { json } from "@remix-run/node";
import { conform, useForm } from "@conform-to/react";
import { parse } from "@conform-to/zod";
import { z } from "zod";
import { Link, useFetcher } from "@remix-run/react";
// session
import { requireUserId } from "~/session.server";
//
import { prisma } from "~/db.server";
import { Loader2 } from "lucide-react";
import { InfoTooltip } from "~/components/admin";
import { cn } from "~/utils/cn";

export const meta: V2_MetaFunction = () => [
  { title: "Settings: Security | Remix templates" },
];

const schema = z
  .object({
    currentPassword: z
      .string({ required_error: "Current password is required" })
      .min(4, "Current password must be at least 4 characters."),
    newPassword: z
      .string({ required_error: "New password is required" })
      .min(4, "New password must be at least 4 characters."),
    confirmNewPassword: z
      .string({ required_error: "Confirm new password is required" })
      .min(4, "Confirm new password must be at least 4 characters."),
  })
  .superRefine(({ currentPassword, newPassword, confirmNewPassword }, ctx) => {
    if (newPassword === currentPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["newPassword"],
        message: "New password must be different from the current password.",
      });
    }
    if (newPassword !== confirmNewPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmNewPassword"],
        message: "Confirm password must match the new password",
      });
    }
  });

export async function action({ request }: ActionArgs) {
  const userId = await requireUserId(request);
  const formData = await request.formData();

  const submission = parse(formData, { schema });

  if (!submission.value) {
    return json(submission, { status: 400 });
  }

  const userWithPassword = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return json(
      {
        ...submission,
        user: "User not found",
      },
      { status: 400 }
    );
  }

  const isPasswordValid = await bcrypt.compare(
    submission.value.currentPassword,
    userWithPassword.password.hash
  );

  if (!isPasswordValid) {
    return json(
      {
        ...submission,
        error: { currentPassword: ["Current password is incorrect"] },
      },
      { status: 400 }
    );
  }

  await bcrypt.hash(submission.value.newPassword, 10);

  //   const user = await prisma.user.update({
  //     where: { id: userId },
  //     data: {
  //       password: {
  //         update: {
  //           hash: hashedPassword,
  //         },
  //       },
  //     },
  //   });

  return json(submission);
}

export default function _route() {
  const editPasswordFetcher = useFetcher<typeof action>();
  const actionData = editPasswordFetcher.data;
  const isSubmitting = editPasswordFetcher.state !== "idle";

  const [form, { currentPassword, newPassword, confirmNewPassword }] = useForm<
    z.input<typeof schema>
  >({
    lastSubmission: actionData,
    id: "password",
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema });
    },
  });

  return (
    <Card className="basis-8/12">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Security</span>
          <InfoTooltip message="Update password" />
        </CardTitle>
      </CardHeader>

      <editPasswordFetcher.Form method="PUT" {...form.props}>
        <fieldset className="disabled:opacity-70" disabled={isSubmitting}>
          <CardContent className="my-6 space-y-6 border-y border-secondary-100 py-8">
            <Input
              label="Current password"
              placeholder="Current password"
              error={
                currentPassword.error ?? actionData?.error.currentPassword?.[0]
              }
              {...conform.input(currentPassword, {
                type: "password",
              })}
            />

            <Input
              label="New password"
              placeholder="New password"
              error={newPassword.error}
              {...conform.input(newPassword, {
                type: "password",
              })}
            />

            <em className="text-gray text-xs leading-loose">
              At least 4 characters
            </em>

            <Input
              label="Confirm new password"
              placeholder="Confirm new password"
              error={confirmNewPassword.error}
              {...conform.input(confirmNewPassword, {
                type: "password",
              })}
            />
          </CardContent>

          <CardFooter className="gap-5">
            <Link
              to="/dashboard/overview"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Go back
            </Link>
            <Button size="lg">
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Save"
              )}
            </Button>
          </CardFooter>
        </fieldset>
      </editPasswordFetcher.Form>
    </Card>
  );
}
