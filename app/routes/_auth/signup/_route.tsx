import { z } from "zod";
import { useId } from "react";
import { parse } from "@conform-to/zod";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import { conform, useForm } from "@conform-to/react";
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Loader2 } from "lucide-react";
//components
import {
  Button,
  Heading,
  Input,
  Paragraph,
  buttonVariants,
} from "@/components/ui";
// utils
import { safeRedirect } from "@/utils";

import { createUserSession, getUserId } from "@/session.server";
import { createUser, getUserByEmail } from "@/models/user.server";
import { cn } from "@/utils/cn";

const schema = z.object({
  fullName: z.string({ required_error: "Full name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Email is invalid"),
  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password must be at least 4 characters." }),
  redirectTo: z.string(),
});

export const meta: MetaFunction = () => [
  { title: "Sign up | Clean House" },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await getUserId(request);

  if (userId) return redirect("/dashboard/overview");

  return json({});
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const submission = parse(formData, { schema });

  if (!submission.value || submission.intent !== "submit") {
    return json(submission, { status: 400 });
  }

  const existingUser = await getUserByEmail(submission.value.email);
  if (existingUser) {
    return json(
      {
        ...submission,
        error: { email: ["A user already exists with this email"] },
      },
      { status: 400 }
    );
  }

  const user = await createUser(
    submission.value.fullName,
    submission.value.email,
    submission.value.password
  );

  return createUserSession({
    redirectTo: safeRedirect(submission.value.redirectTo, "/"),
    remember: false,
    request,
    userId: user.id,
  });
};

export default function SignUp() {
  const id = useId();

  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard/overview";

  const [form, { fullName, email, password }] = useForm<z.input<typeof schema>>(
    {
      lastSubmission: actionData,
      id,
      shouldValidate: "onBlur",
      onValidate({ formData }) {
        return parse(formData, { schema });
      },
    }
  );

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#F4F4F7] p-5  lg:p-0">
      <div className="rounded-2xl bg-white p-6 md:p-8 lg:w-8/12">
        <Link
          to="/login"
          className={cn(buttonVariants({ variant: "link" }), "mb-5")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.97484 4.94141L2.9165 9.99974L7.97484 15.0581"
              stroke="#1A1C1E"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.0831 10H3.05811"
              stroke="#1A1C1E"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <Heading
          variant="h1"
          className="pb-3 text-center text-2xl lg:text-[32px]"
        >
          Create New Account{" "}
        </Heading>

        <Paragraph variant="body2" className="pb-8 text-center">
          Please register by filling in your personal data
        </Paragraph>

        <Form method="POST" className="mx-auto" {...form.props}>
          <fieldset
            className="space-y-6 disabled:opacity-70"
            disabled={navigation.state !== "idle"}
          >
            <Input
              label="Full name"
              placeholder="Full name"
              data-testid="full-name"
              error={fullName.error}
              {...conform.input(fullName)}
            />

            <Input
              label="Email"
              placeholder="Email"
              data-testid="email"
              error={email.error}
              {...conform.input(email, {
                type: "email",
              })}
            />

            <Input
              label="Password"
              placeholder="Password"
              data-testid="password"
              error={password.error}
              {...conform.input(password, {
                type: "password",
              })}
            />

            <input type="hidden" name="redirectTo" value={redirectTo} />

            <Button type="submit" size="lg" className="w-full">
              {navigation.state !== "idle" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Create account"
              )}
            </Button>

            <div className="text-center text-sm font-medium text-secondary-400">
              Already have an account?{" "}
              <Link to="/login" className="text-primary-500">
                Login
              </Link>
            </div>
          </fieldset>
        </Form>
      </div>

      <div className="absolute hidden text-sm text-secondary-400 lg:bottom-3 lg:block">
        © 2025 Clean House. All rights reserved.
      </div>
    </div>
  );
}
