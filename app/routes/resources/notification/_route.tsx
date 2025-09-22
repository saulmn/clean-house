import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "@/db.server";
//
import { requireUserId } from "@/session.server";

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  const formData = await request.formData();

  const read = formData.get("read");

  console.log("[[[[[[]]]]]] test", read);
  await prisma.notification.updateMany({
    where: { userId: userId, read: false },
    data: { read: true },
  });

  return json({ message: "success" });
}
