import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
// components
import { Header } from "./components";
//
import { requireUserId } from "~/session.server";
import { prisma } from "~/db.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  const url = new URL(request.url);

  if (url.pathname === "/dashboard") {
    return redirect("/dashboard/overview");
  }

  const notifications = await prisma.notification.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  const unreadNotifications = await prisma.notification.count({
    where: { userId, read: false },
  });

  return json({ notifications, unreadNotifications });
};

export default function _layout() {
  return (
    <>
      <Header />
      <main className="h-auto min-h-screen w-screen bg-[#F4F4F7] pb-5 font-manrope">
        <Outlet />
      </main>
    </>
  );
}
