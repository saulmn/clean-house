import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { conform, useForm } from "@conform-to/react";
import { parse } from "@conform-to/zod";
import { useId, useState } from "react";
import type { z } from "zod";
import type { Focused } from "react-credit-cards-2";
// components
import {
  Button,
  Card as CardComponent,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  buttonVariants,
} from "@/components/ui";
import CardDesign from "./CardDesign";
import { InfoTooltip } from "@/components/admin";
// utils
import {
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate,
} from "@/utils/payment";
import type { CardData } from "@/utils/payment";
//
import type { action, loader } from "../_route";
import { editCardSchema } from "../_route";
import { Loader2 } from "lucide-react";

export default function CardForm() {
  const id = useId();
  const { cardInfo } = useLoaderData<typeof loader>();
  const [card, setCard] = useState<CardData>({
    name: cardInfo.name,
    number: cardInfo.number,
    expiry: cardInfo.expiry,
    cvc: cardInfo.cvc,
    issuer: "",
    focused: "",
  });
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const [form, fieldset] = useForm<z.input<typeof editCardSchema>>({
    lastSubmission: actionData,
    id,
    shouldValidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema: editCardSchema });
    },
    defaultValue: {
      name: cardInfo.name,
      number: cardInfo.number,
      expiry: cardInfo.expiry,
      cvc: cardInfo.cvc,
      amount: cardInfo.amount,
    },
  });

  const handleCallback = ({ issuer }: { issuer: string }, isValid: boolean) => {
    if (isValid) {
      setCard({ ...card, issuer });
    }
  };

  const handleInputFocus = ({ target }: { target: HTMLInputElement }) => {
    setCard({ ...card, focused: target.name as Focused });
  };

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    setCard({ ...card, [target.name]: target.value });
  };

  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <CardComponent className="h-min basis-full space-y-4 lg:basis-10/12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>Card details</span>
            <InfoTooltip message="Edit your card details" />
          </CardTitle>
        </CardHeader>

        <Form method="PUT" className="mx-auto w-full" {...form.props}>
          <fieldset
            className="w-full space-y-3 disabled:opacity-70"
            disabled={navigation.state !== "idle"}
          >
            <CardContent className="space-y-6">
              <Input
                label="Name on card"
                placeholder="Email"
                value={card.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                error={fieldset.name.error}
                {...conform.input(fieldset.name)}
              />

              <Input
                label="Card number"
                placeholder="Card Number"
                value={card.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                error={fieldset.number.error}
                {...conform.input(fieldset.number)}
              />

              <div className="flex w-full flex-col gap-5 md:flex-row">
                <div className="w-full">
                  <Input
                    label="Expiry Date"
                    placeholder="Expiry Date"
                    value={card.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    error={fieldset.expiry.error}
                    {...conform.input(fieldset.expiry, {
                      type: "tel",
                    })}
                  />
                </div>

                <div className="w-full">
                  <Input
                    label="CVC/CVV"
                    placeholder="CVC/CVV"
                    value={card.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    error={fieldset.cvc.error}
                    {...conform.input(fieldset.cvc, {
                      type: "tel",
                    })}
                  />
                </div>
              </div>

              <Input
                label="Amount"
                placeholder="Card amount"
                error={fieldset.amount.error}
                {...conform.input(fieldset.amount, {
                  type: "number",
                })}
              />
            </CardContent>

            <CardFooter className="gap-4 pt-5">
              <Link
                to="/dashboard/wallets"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Go back
              </Link>
              <Button size="lg">
                {navigation.state !== "idle" ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Save"
                )}
              </Button>
            </CardFooter>
          </fieldset>
        </Form>
      </CardComponent>

      <CardDesign card={card} handleCallback={handleCallback} />
    </div>
  );
}
