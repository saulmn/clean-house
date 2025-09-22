import { Link, useLoaderData } from "@remix-run/react";
// components
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ScrollArea,
  ScrollBar,
} from "@/components/ui";
import { InfoTooltip } from "@/components/admin";
// utils
import { cn } from "@/utils/cn";
import { formatCurrency } from "@/utils/formatNumber";
import { getStatusColor } from "@/utils/getStatusColor";
import { formatDate, formatTime } from "@/utils/formatDate";
//
import type { loader } from "../_route";
import type { Status } from "@/types/status";

export default function LastTransaction() {
  const { recentTransactions } = useLoaderData<typeof loader>();

  return (
    <Card className="h-min space-y-4">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <span>Last transaction</span>
          <InfoTooltip message="Your last Activity" />
        </CardTitle>

        <Link
          to="/dashboard/overview/transactions"
          className="group flex items-center text-sm text-secondary-300 duration-200 hover:text-secondary-500"
        >
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            className="ml-1.5 stroke-secondary-300 group-hover:stroke-secondary-500"
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
      </CardHeader>

      <CardContent>
        <ScrollArea className="lg:h-[198px]">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between gap-4 py-4"
            >
              <div className="flex flex-auto items-center  gap-4">
                <Avatar
                  className={cn(
                    transaction.contact?.avatar
                      ? "h-12 w-12"
                      : "h-12 w-12 bg-[#F4F4F7] p-[14px]"
                  )}
                >
                  <AvatarImage
                    src={
                      transaction.contact?.avatar ?? transaction.company?.logo
                    }
                  />
                  <AvatarFallback>
                    {transaction.contact?.fullName ?? transaction.company?.name}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-base font-semibold">
                    {transaction.contact?.fullName ?? transaction.company?.name}
                  </div>
                  <div className="mt-1 text-sm font-medium capitalize text-secondary-300">
                    {transaction.company?.industry ?? "Personal"}
                  </div>
                </div>
              </div>

              <div className="w-24">
                <div className="pb-1 text-base font-semibold text-secondary-500">
                  {formatDate({ date: transaction.createdAt, type: "short" })}
                </div>
                <div className="text-sm font-medium text-secondary-300">
                  {formatTime(transaction.createdAt)}
                </div>
              </div>

              <div className="w-28 pb-1 text-base font-semibold text-secondary-500">
                {transaction.type === "Receive"
                  ? `+${formatCurrency(transaction.amount)}`
                  : `-${formatCurrency(transaction.amount)}`}
              </div>

              <Badge
                variant={getStatusColor(transaction.status) as Status}
                size="lg"
              >
                {transaction.status}
              </Badge>
            </div>
          ))}

          <ScrollBar orientation="horizontal" className="md:hidden" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
