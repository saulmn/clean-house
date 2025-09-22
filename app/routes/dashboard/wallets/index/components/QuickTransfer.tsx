import { useRef, useState } from "react";
import Slider from "react-slick";
import { useFetcher } from "@remix-run/react";
import { Loader2 } from "lucide-react";
// components
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Paragraph,
} from "@/components/ui";
import { InfoTooltip } from "@/components/admin";
// utils
import { cn } from "@/utils/cn";
//
import type { Contact } from "@prisma/client";
import type { SerializeFrom } from "@remix-run/node";

type QuickTransferProps = {
  contacts: SerializeFrom<Contact[]>;
};

export default function QuickTransfer({ contacts }: QuickTransferProps) {
  const [selectContact, setSelectContact] = useState(0);
  const carouselRef = useRef<Slider | null>(null);
  const quickTransferFetcher = useFetcher<{ error?: boolean }>();

  console.log(quickTransferFetcher.data);

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

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Card className="h-min basis-7/12 space-y-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Quick Transfer</span>
          <InfoTooltip message="Make a transfer" />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="relative mx-auto max-h-[120px] max-w-[450px]">
          <button
            className="absolute -left-4 top-[40%] z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow-[0px_4px_24px_0px_rgba(0,0,0,0.14)]"
            onClick={handlePrev}
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
                  "w-5 cursor-pointer p-2 text-center"
                )}
              >
                <img
                  src={contact.avatar!}
                  alt={contact.fullName}
                  className={cn(
                    selectContact === index &&
                      "scale-125 transform shadow-[0px_44px_184px_-10px_rgba(0,0,0,0.11)] transition-all duration-200",
                    "mx-auto mb-3 h-14 w-14 rounded-full "
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
      </CardContent>

      <CardFooter className="pt-4">
        <quickTransferFetcher.Form
          method="POST"
          action="/resources/operation"
          className="w-full"
        >
          <fieldset
            className="flex w-full flex-col items-center gap-4 disabled:opacity-70 lg:flex-row"
            disabled={quickTransferFetcher.state !== "idle"}
          >
            <div className="relative w-full">
              <img
                src="/icons/dollar.svg"
                alt="dollar"
                className={cn(
                  quickTransferFetcher.data?.error ? "top-[37%]" : "top-1/2",
                  "absolute left-3 -translate-y-1/2 transform"
                )}
              />
              <Input
                type="number"
                name="amount"
                placeholder="Amount"
                className="w-full pl-10"
                step="0.01"
                error={quickTransferFetcher.data?.error ? "true" : undefined}
              />
            </div>

            <input
              type="hidden"
              name="contactId"
              value={contacts[selectContact].id}
            />
            <input type="hidden" name="type" value="Transfer" />

            <Button size="lg" className="w-full min-w-[140px] lg:w-auto">
              {quickTransferFetcher.state !== "idle" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <>
                  {" "}
                  Send{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M7.89969 6.32015L16.3897 3.49015C20.1997 2.22015 22.2697 4.30015 21.0097 8.11015L18.1797 16.6002C16.2797 22.3102 13.1597 22.3102 11.2597 16.6002L10.4197 14.0802L7.89969 13.2402C2.18969 11.3402 2.18969 8.23015 7.89969 6.32015Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.6104 13.6496L14.1904 10.0596"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </Button>
          </fieldset>
        </quickTransferFetcher.Form>
      </CardFooter>
    </Card>
  );
}
