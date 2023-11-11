import { useFetcher } from "@remix-run/react";
import { Loader2, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import type { Contact } from "@prisma/client";
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
  Paragraph,
} from "~/components/ui";
import type { SerializeFrom } from "@remix-run/node";
// utils
import { cn } from "~/utils/cn";

type SentMoneyDialogProps = {
  contacts: SerializeFrom<Contact[]>;
};

export default function SentMoneyDialog({ contacts }: SentMoneyDialogProps) {
  const sendMoneyFetcher = useFetcher();
  const carouselRef = useRef<Slider | null>(null);
  const [open, setOpen] = useState(false);
  const [selectContact, setSelectContact] = useState(0);

  const actionData = sendMoneyFetcher.data;
  const isSubmitting = sendMoneyFetcher.state !== "idle";

  const sliderSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 7,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "0 40px",
    beforeChange: (current: number, next: number) => setSelectContact(next),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  useEffect(() => {
    if (actionData?.success && !isSubmitting) {
      setOpen(false);
    }
  }, [actionData?.success, isSubmitting]);

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full">
          <img src="/icons/transfer.svg" alt="transfer" className="mr-2" />
          Transfer
        </Button>
      </DialogTrigger>

      <DialogContent
        onPointerDownOutside={(e) => (isSubmitting ? e.preventDefault() : null)}
      >
        <sendMoneyFetcher.Form method="POST" action="/resources/operation">
          <fieldset
            className="flex flex-col items-center justify-center gap-8 disabled:opacity-70 sm:max-w-[480px]"
            disabled={isSubmitting}
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
                Send Money
              </DialogTitle>

              <DialogDescription className="text-center">
                Please enter user information that you want to send money and
                enter amount
              </DialogDescription>
            </DialogHeader>

            <div className="relative w-72 md:max-h-[120px] md:w-auto md:max-w-[400px]">
              <button
                type="button"
                onClick={handlePrev}
                className="absolute -left-4 top-[40%] z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M8.75007 11.6199L4.94674 7.81655C4.49757 7.36738 4.49757 6.63238 4.94674 6.18322L8.75007 2.37988"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <Slider ref={carouselRef} {...sliderSettings}>
                {contacts.map((contact, index) => (
                  <div
                    key={contact.id}
                    className={cn(
                      selectContact === index ? "opacity-100" : "opacity-40",
                      "h-10 w-10 cursor-pointer p-3 text-center"
                    )}
                  >
                    <img
                      src={contact.avatar!}
                      alt={contact.fullName}
                      className={cn(
                        selectContact === index &&
                          "scale-125 transform shadow-[0px_44px_184px_-10px_rgba(0,0,0,0.11)] transition-all duration-200",
                        "mx-auto mb-3 h-16 w-16 rounded-full "
                      )}
                    />
                    <Paragraph
                      variant="body3"
                      className="whitespace-nowrap font-semibold text-secondary-500"
                    >
                      {contact.fullName}
                    </Paragraph>
                    <Paragraph
                      variant="caption"
                      className="font-semibold text-secondary-300"
                    >
                      @{contact.username}
                    </Paragraph>
                  </div>
                ))}
              </Slider>

              <button
                type="button"
                onClick={handleNext}
                className="absolute -right-4 top-[40%] flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M5.19727 11.6199L9.0006 7.81655C9.44977 7.36738 9.44977 6.63238 9.0006 6.18322L5.19727 2.37988"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
              </button>
            </div>

            <div className="w-full space-y-6">
              <div className="relative">
                <img
                  src="/icons/dollar.svg"
                  alt="dollar"
                  className={cn(
                    actionData?.error ? "top-[53%]" : "top-[67%]",
                    "absolute left-3 -translate-y-1/2 transform"
                  )}
                />
                <Input
                  name="amount"
                  label="Enter amount"
                  placeholder="Amount"
                  className="w-full pl-10"
                  error={actionData?.error}
                />
              </div>
            </div>

            <DialogFooter className="w-full">
              <input
                type="hidden"
                name="contactId"
                value={contacts[selectContact].id}
              />
              <input type="hidden" name="type" value="Transfer" />

              <Button type="submit" size="lg" className="w-full">
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Confirm"
                )}
              </Button>
            </DialogFooter>
          </fieldset>
        </sendMoneyFetcher.Form>
      </DialogContent>
    </Dialog>
  );
}
