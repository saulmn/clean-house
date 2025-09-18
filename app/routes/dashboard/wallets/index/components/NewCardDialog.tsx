import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Form, useNavigation } from "@remix-run/react";
import { Loader2, X } from "lucide-react";
import { useState } from "react";
import type { Focused } from "react-credit-cards-2";
import Card from "react-credit-cards-2";
// components
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  ScrollArea,
} from "~/components/ui";
// utils
import type { CardData } from "~/utils/payment";
import {
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate,
} from "~/utils/payment";

export default function NewCardDialog() {
  const [card, setCard] = useState<CardData>({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
  });
  const navigation = useNavigation();

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
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" size="lg" className="w-full">
          Add new card
        </Button>
      </DialogTrigger>

      <DialogContent
        onPointerDownOutside={(e) =>
          navigation.state !== "idle" ? e.preventDefault() : null
        }
        className="p-6 sm:max-w-[480px] lg:p-8"
      >
        <ScrollArea className="h-[500px] lg:h-auto">
          <Form
            method="POST"
            action="/resources/new-card"
            className="mx-auto w-full"
          >
            <DialogHeader className="flex w-full items-center justify-center">
              <div className="w-full">
                <DialogPrimitive.Close asChild>
                  <Button
                    variant="link"
                    size="icon"
                    className="text-secondary-500 hover:text-primary-500"
                  >
                    <X />
                  </Button>
                </DialogPrimitive.Close>
              </div>

              <DialogTitle className="text-[32px] font-bold">
                Add New Card
              </DialogTitle>

              <DialogDescription className="text-center">
                add a new card for your transaction
              </DialogDescription>
            </DialogHeader>

            <fieldset
              className="w-full space-y-3 disabled:opacity-70"
              disabled={navigation.state !== "idle"}
            >
              <Card {...card} callback={handleCallback} />

              <Input
                name="name"
                label="Card Holder Name"
                placeholder="Card Holder Name"
                value={card.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />

              <Input
                name="number"
                label="Card Number"
                placeholder="Card Number"
                value={card.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />

              <div className="flex w-full flex-col gap-5 md:flex-row">
                <div className="w-full">
                  <Input
                    name="expiry"
                    type="tel"
                    label="Expiry Date"
                    placeholder="Expiry Date"
                    value={card.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                  />
                </div>

                <div className="w-full">
                  <Input
                    name="cvc"
                    type="tel"
                    label="CVC/CVV"
                    placeholder="CVC/CVV"
                    value={card.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                  />
                </div>
              </div>

              <DialogFooter className="w-full pt-4">
                <Button size="lg" type="submit" className="w-full">
                  {navigation.state !== "idle" ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "Confirm"
                  )}
                </Button>
              </DialogFooter>
            </fieldset>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
