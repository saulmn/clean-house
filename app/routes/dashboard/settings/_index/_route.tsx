import { z } from "zod";
import { useId, useState } from "react";
import { parse } from "@conform-to/zod";
import { Link, useFetcher } from "@remix-run/react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { Loader2 } from "lucide-react";
import { json } from "@remix-run/node";
import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { conform, useForm } from "@conform-to/react";
// components
import { InfoTooltip } from "@/components/admin";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  buttonVariants,
} from "@/components/ui";
// resources
import { CountriesCombobox } from "@/routes/resources/countries-combobox/_route";
// utils;
import { useUser } from "@/utils";
import { cn } from "@/utils/cn";
//
import { requireUserId } from "@/session.server";
import { prisma } from "@/db.server";

export const meta: MetaFunction = () => [
  { title: "Settings: Personal information | Clean House" },
];

const schema = z.object({
  fullName: z.string({ required_error: "Full name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Email is invalid"),
  phone: z.string().optional(),
  country: z.string().optional(),
  province: z.string().optional(),
  city: z.string().optional(),
});

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const submission = parse(formData, { schema });

  if (!submission.value || submission.intent !== "submit") {
    return json(submission, { status: 400 });
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      ...submission.value,
    },
  });

  return json(submission);
}

export default function _route() {
  const user = useUser();
  const id = useId();
  const [countryName, setCountryName] = useState(user?.country ?? "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phone ?? "");

  const editInformationFetcher = useFetcher<typeof action>();
  const actionData = editInformationFetcher.data;
  const isSubmitting = editInformationFetcher.state !== "idle";

  const [form, { fullName, email, country, phone, province, city }] = useForm<
    z.input<typeof schema>
  >({
    lastSubmission: actionData,
    id,
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema });
    },
    defaultValue: {
      fullName: user?.fullName ?? "",
      email: user?.email ?? "",
      province: user?.province ?? "",
      city: user?.city ?? "",
    },
  });

  function handleChangePhoneNumber(value?: string) {
    setPhoneNumber(value ?? "");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Personal Information</span>
          <InfoTooltip message="Edit your information" />
        </CardTitle>
      </CardHeader>

      <editInformationFetcher.Form method="PUT" {...form.props}>
        <fieldset className="disabled:opacity-70" disabled={isSubmitting}>
          <CardContent className="my-6 space-y-6 border-y border-secondary-100 py-8">
            <Input
              label="Display name"
              placeholder="Display name"
              error={fullName.error}
              {...conform.input(fullName)}
            />

            <Input
              label="Email"
              placeholder="Email"
              readOnly
              error={email.error}
              {...conform.input(email, {
                type: "email",
              })}
            />

            <div>
              <Label>Phone</Label>
              <PhoneInputWithCountrySelect
                placeholder="Phone"
                value={phoneNumber}
                onChange={handleChangePhoneNumber}
                limitMaxLength={true}
                error={phone.error}
                {...conform.input(phone, {
                  type: "tel",
                })}
                inputComponent={Input}
              />
            </div>

            <div className="flex w-full flex-col gap-5 lg:flex-row">
              <div className="basis-1/3">
                <CountriesCombobox
                  value={countryName}
                  setValue={setCountryName}
                />

                <input
                  type="hidden"
                  value={countryName}
                  {...conform.input(country)}
                />
              </div>

              <div className="basis-1/3">
                <Input
                  label="Province"
                  placeholder="Province"
                  error={province.error}
                  {...conform.input(province)}
                />
              </div>

              <div className="basis-1/3">
                <Input
                  label="City"
                  placeholder="City"
                  error={city.error}
                  {...conform.input(city)}
                />
              </div>
            </div>
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
      </editInformationFetcher.Form>
    </Card>
  );
}
