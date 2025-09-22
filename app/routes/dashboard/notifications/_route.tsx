import { useLoaderData } from "@remix-run/react";
// components
import { NotificationItem } from "@/components/admin";
import { Breadcrumb, Card, CardContent, Container } from "@/components/ui";
import { json } from "@remix-run/node";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
// utils
import { formatToNow } from "@/utils/formatDate";
//
import { prisma } from "@/db.server";

export const meta: MetaFunction = () => [
  { title: "Notifications | Remix Template" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const notifications = await prisma.notification.findMany({
    orderBy: { createdAt: "desc" },
  });

  return json({ notifications });
}

export default function _route() {
  const { notifications } = useLoaderData<typeof loader>();
  return (
    <>
      <div className="w-screen bg-[#1C2634]">
        <Container className="pb-40 pt-28 xl:px-0">
          <Breadcrumb
            heading="Notifications 👏🏻"
            links={[
              { name: "Dashboard", href: "/dashboard/overview" },
              { name: "Notifications", href: "" },
            ]}
          />
        </Container>
      </div>

      <Container className="relative -top-32 h-auto w-full xl:px-0">
        <Card>
          <CardContent className="space-y-6">
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                iconSrc={
                  notification.type === "Transfer"
                    ? "/icons/money-send.svg"
                    : "/icons/receive-money.svg"
                }
                title={notification.title}
                time={formatToNow(notification.createdAt)}
                message={notification.description}
              />
            ))}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
