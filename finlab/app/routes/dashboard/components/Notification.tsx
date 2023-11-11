import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import { CheckCheck } from "lucide-react";
// components
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Paragraph,
  buttonVariants,
} from "~/components/ui";
import { InfoTooltip } from "~/components/admin";
// utils
import { cn } from "~/utils/cn";
import { formatToNow } from "~/utils/formatDate";
// hooks
import { useResponsive } from "~/hooks/useResponsive";
//
import type { loader } from "../_layout";

export default function Notification() {
  const { notifications, unreadNotifications } = useLoaderData<typeof loader>();
  const notificationFetcher = useFetcher();
  const isMobile = useResponsive().isMobile;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative">
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12.0201 3.41016C8.71009 3.41016 6.02009 6.10016 6.02009 9.41016V12.3002C6.02009 12.9102 5.76009 13.8402 5.45009 14.3602L4.30009 16.2702C3.59009 17.4502 4.08009 18.7602 5.38009 19.2002C9.69009 20.6402 14.3401 20.6402 18.6501 19.2002C19.8601 18.8002 20.3901 17.3702 19.7301 16.2702L18.5801 14.3602C18.2801 13.8402 18.0201 12.9102 18.0201 12.3002V9.41016C18.0201 6.11016 15.3201 3.41016 12.0201 3.41016Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M13.8699 3.70043C13.5599 3.61043 13.2399 3.54043 12.9099 3.50043C11.9499 3.38043 11.0299 3.45043 10.1699 3.70043C10.4599 2.96043 11.1799 2.44043 12.0199 2.44043C12.8599 2.44043 13.5799 2.96043 13.8699 3.70043Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.02 19.5596C15.02 21.2096 13.67 22.5596 12.02 22.5596C11.2 22.5596 10.44 22.2196 9.90002 21.6796C9.36002 21.1396 9.02002 20.3796 9.02002 19.5596"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
          </Button>

          {unreadNotifications ? (
            <div className="absolute right-0 top-0 mr-2 mt-1">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-error-400 p-1 text-xs text-white">
                {unreadNotifications}
              </div>
            </div>
          ) : null}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="mx-auto w-[350px] pb-5 md:w-[400px] md:p-5"
        align={isMobile ? "center" : "end"}
        forceMount
      >
        <DropdownMenuLabel className="pb-6 font-normal">
          <div className="flex justify-between">
            <Paragraph className=" font-semibold">Notification</Paragraph>

            {unreadNotifications ? (
              <InfoTooltip
                icon={<CheckCheck className="h-4 w-4 text-secondary-400" />}
                message="Mark all as read"
                onClick={() => {
                  notificationFetcher.submit(
                    { read: true },
                    {
                      method: "PUT",
                      action: "/resources/notification",
                    }
                  );
                }}
              />
            ) : null}
          </div>
          <Paragraph variant="body3" className="text-secondary-300">
            You have {unreadNotifications} unread notifications
          </Paragraph>
        </DropdownMenuLabel>

        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}

        <DropdownMenuItem className="mt-4 hover:bg-white" asChild>
          <Link
            to="/dashboard/notifications"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full cursor-pointer focus-visible:ring-0"
            )}
          >
            See more Notification
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type NotificationItemProps = {
  notification: {
    id: string;
    title: string;
    description: string;
    type: string;
    read: boolean;
    createdAt: string;
  };
};

function NotificationItem({ notification }: NotificationItemProps) {
  return (
    <DropdownMenuGroup>
      <DropdownMenuItem className="items-start gap-4">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100">
            <img
              src={
                notification.type === "Transfer"
                  ? "/icons/money-send.svg"
                  : "/icons/receive-money.svg"
              }
              alt={notification.title}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Paragraph
              variant="body2"
              className=" pb-1 font-semibold text-secondary-500"
            >
              <span>{notification.title}</span>
            </Paragraph>

            <div className="flex items-center gap-1.5 text-sm font-normal text-secondary-300">
              {formatToNow(notification.createdAt)}{" "}
              {notification.read ? null : (
                <div className="h-2 w-2 rounded-full bg-error-400" />
              )}
            </div>
          </div>
          <Paragraph variant="body3" className="text-medium text-secondary-400">
            {notification.description}
          </Paragraph>
        </div>
      </DropdownMenuItem>
    </DropdownMenuGroup>
  );
}
