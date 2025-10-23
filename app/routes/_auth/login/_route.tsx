import { conform, useForm } from "@conform-to/react";
import { parse } from "@conform-to/zod";
import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import bcrypt from "bcryptjs";
import { Info, Loader2 } from "lucide-react";
import { useId } from "react";
import { z } from "zod";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Heading,
  Input,
  Label,
} from "@/components/ui";
//components
import { Alert, AlertDescription } from "@/components/ui/alert";
import { prisma } from "@/db.server";
import { createUserSession, getUserId } from "@/session.server";
// utils
import { safeRedirect } from "@/utils";

const schema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Email is invalid"),
  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password must be at least 4 characters." }),
  remember: z
    .string()
    .transform((value) => value === "on")
    .optional(),
  redirectTo: z.string(),
});

export const meta: MetaFunction = () => [{ title: "Login | Clean House" }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await getUserId(request);

  if (userId) return redirect("/dashboard/overview");

  return {};
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const submission = parse(formData, { schema });

  if (!submission.value || submission.intent !== "submit") {
    return { ...submission, status: 400 };
  }

  const userWithPassword = await prisma.user.findUnique({
    where: { email: submission.value.email },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return {
      ...submission,
      error: { email: ["No user found with this email"] },
    };
  }

  const isValid = await bcrypt.compare(
    submission.value.password,
    userWithPassword.password.hash,
  );

  if (!isValid) {
    return json(
      {
        ...submission,
        error: { password: ["Invalid password"] },
      },
      { status: 400 },
    );
  }
  return createUserSession({
    redirectTo: safeRedirect(submission.value.redirectTo, "/"),
    remember: submission.value.remember ?? false,
    request,
    userId: userWithPassword.id,
  });
};

export default function Login() {
  const id = useId();
  const rememberId = useId();
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard/overview";

  const [form, { email, password }] = useForm<z.input<typeof schema>>({
    lastSubmission: actionData,
    id,
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema });
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6 md:p-8">
          <Heading
            variant="h1"
            className="pb-8 text-center text-2xl lg:text-[32px]"
          >
            Login First to Your Account
          </Heading>

          <Alert className="mb-8 flex items-center gap-1 py-3">
            <div>
              <Info className="h-4 w-4" />
            </div>
            <AlertDescription>
              You can se <span className="font-bold">demo@finlab.com</span> and
              password: <span className="font-bold">demo123</span>
            </AlertDescription>
          </Alert>

          <Form method="POST" className="mx-auto" {...form.props}>
            <fieldset
              className="space-y-6 disabled:opacity-70"
              disabled={navigation.state !== "idle"}
            >
              <div>
                <Label htmlFor={email.id}>Email</Label>
                <Input
                  placeholder="Email"
                  {...conform.input(email, {
                    type: "email",
                  })}
                />
              </div>

              <div>
                <Label htmlFor={password.id}>Password</Label>
                <Input
                  placeholder="Password"
                  {...conform.input(password, {
                    type: "password",
                  })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id={rememberId} name="remember" />
                  <label
                    htmlFor={rememberId}
                    className="text-sm font-semibold leading-none text-secondary-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  to="/auth/forgot-password"
                  className="text-sm font-semibold text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>

              <input type="hidden" name="redirectTo" value={redirectTo} />

              <Button type="submit" size="lg" className="w-full">
                {navigation.state !== "idle" ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Login"
                )}
              </Button>

              <div className="text-center text-sm font-medium text-secondary-400">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-primary-500">
                  Register Here
                </Link>
              </div>
            </fieldset>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
