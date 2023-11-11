import { Link } from "@remix-run/react";
// components
import { InfoTooltip } from "~/components/admin";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Paragraph,
} from "~/components/ui";

export default function PockedPlans() {
  return (
    <Card className="h-full space-y-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>My Pocked Plans</span>
          <InfoTooltip message="Savings plans" />
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-4">
        {PLANS.map((item) => (
          <div
            className="col-span-1 space-y-5 rounded-xl border border-secondary-200 p-5"
            key={item.name}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary-100">
              <img src={item.img} alt={item.name} />
            </div>

            <div>
              <Paragraph
                variant="body2"
                className="pb-[1px] font-semibold text-secondary-500"
              >
                {item.name}
              </Paragraph>
              <Paragraph
                variant="body3"
                className="font-semibold text-secondary-300"
              >
                {item.amount}
              </Paragraph>
            </div>
          </div>
        ))}{" "}
      </CardContent>

      <CardFooter className="flex justify-center">
        <Link
          to=""
          preventScrollReset
          className="group flex items-center text-sm text-secondary-300 duration-200 hover:text-secondary-500"
        >
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            className="ml-1.5 rotate-90 stroke-secondary-300 group-hover:stroke-secondary-500"
          >
            <path
              d="M8.41797 3.95898L11.9588 7.49982L8.41797 11.0407"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.04199 7.5H11.8595"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
}

const PLANS = [
  {
    name: "New Car",
    amount: 8000,
    img: "/images/car.png",
  },
  {
    name: "New Console",
    amount: 2050,
    img: "/images/console.png",
  },
  {
    name: "Savings ",
    amount: 34100,
    img: "/images/savings.png",
  },
  {
    name: "Shopping",
    amount: 100000,
    img: "/images/shopping.png",
  },
];
