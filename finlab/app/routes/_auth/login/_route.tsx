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
import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { Info, Loader2 } from "lucide-react";
//components
import { Alert, AlertDescription } from "~/components/ui/alert";
import { Button, Checkbox, Heading, Input } from "~/components/ui";
// utils
import { safeRedirect } from "~/utils";

import { prisma } from "~/db.server";
import { createUserSession, getUserId } from "~/session.server";

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

export const meta: V2_MetaFunction = () => [
  { title: "Login | Remix Template" },
];

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (userId) return redirect("/dashboard/overview");

  return json({});
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const submission = parse(formData, { schema });

  if (!submission.value || submission.intent !== "submit") {
    return json(submission, { status: 400 });
  }

  const userWithPassword = await prisma.user.findUnique({
    where: { email: submission.value.email },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return json(
      {
        ...submission,
        error: { email: ["No user found with this email"] },
      },
      { status: 400 }
    );
  }

  const isValid = await bcrypt.compare(
    submission.value.password,
    userWithPassword.password.hash
  );

  if (!isValid) {
    return json(
      {
        ...submission,
        error: { password: ["Invalid password"] },
      },
      { status: 400 }
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
    <div className="flex h-full w-full items-center justify-center bg-[#F4F4F7] p-5 lg:p-0">
      <div className="rounded-2xl bg-white p-6 md:p-8 lg:relative">
        <div className="absolute  -top-20 right-[28rem] hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="72"
            viewBox="0 0 103 72"
            fill="none"
          >
            <g opacity="0.1">
              <path
                d="M0.97684 18.1162C3.64206 11.1695 11.1328 7.23167 18.0164 5.6835C25.6485 3.949 33.6375 4.54228 41.0573 7.03885C56.1035 12.0187 67.5029 23.7318 76.7342 36.1371C82.4844 43.8571 87.4393 52.1121 91.7277 60.7557C92.125 61.5598 91.4384 62.7101 90.6942 62.9653C89.7479 63.3026 88.8819 62.736 88.4846 61.9318C84.8354 54.63 80.6531 47.639 75.9376 40.9588C71.6062 34.8762 66.9437 29.0222 61.5637 23.8365C51.0367 13.8651 37.1572 6.59787 22.2733 8.45228C15.2766 9.31633 6.84221 12.5542 4.1214 19.7119C3.76132 20.5647 2.60404 20.8464 1.82011 20.4819C0.820782 19.993 0.616761 18.969 0.97684 18.1162Z"
                fill="black"
              />
              <path
                d="M100.918 35.8981C98.0786 44.4461 95.2396 52.9941 92.4006 61.5422C91.8226 63.3077 91.3577 65.7574 89.1676 66.1054C88.0748 66.3139 87.0754 65.8249 86.1361 65.1939C85.1968 64.5628 84.3263 63.9273 83.3826 63.2274C79.6898 60.6298 76.0613 57.9589 72.3685 55.3614C68.236 52.3772 64.108 49.4618 59.9755 46.4777C59.2471 45.9022 59.2408 44.7272 59.8207 44.0677C60.4651 43.335 61.5023 43.3375 62.2307 43.913C68.9701 48.7348 75.7096 53.5567 82.3757 58.314C84.1122 59.5162 85.7843 60.7916 87.5208 61.9937C87.7362 62.1182 88.3047 62.3582 88.4601 62.6248C88.6111 62.8225 88.5246 62.5515 88.3957 62.6981C88.0179 63.2754 88.1891 62.7113 88.1891 62.7113C88.1847 62.6425 88.5448 61.7897 88.5404 61.7209C88.7116 61.1568 88.8872 60.6615 89.0584 60.0974C90.3301 56.2132 91.6706 52.3245 92.9378 48.3714C94.3807 43.923 95.8924 39.4702 97.3352 35.0219C97.622 34.1047 98.4129 33.5008 99.3946 33.7143C100.385 34.0655 101.209 35.0497 100.918 35.8981Z"
                fill="black"
              />
            </g>
          </svg>
        </div>

        <Heading
          variant="h1"
          className="pb-8 text-center text-2xl lg:text-[32px]"
        >
          Login First to Your Account
        </Heading>

        <Alert variant="primary" className="mb-8 flex items-center gap-1 py-3">
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
            <Input
              label="Email"
              placeholder="Email"
              {...conform.input(email, {
                type: "email",
              })}
            />

            <Input
              label="Password"
              placeholder="Password"
              {...conform.input(password, {
                type: "password",
              })}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" name="remember" />
                <label
                  htmlFor="remember"
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
      </div>

      <div className="absolute hidden text-sm text-secondary-400 lg:bottom-3 lg:block">
        © 2022 Finlab. All rights reserved.
      </div>
    </div>
  );
}
