import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
// models
import { updateUserBalance } from "@/models/user.server";
// session
import { getUser, requireUserId } from "@/session.server";
// utils
import { formatCurrency } from "@/utils/formatNumber";
import { getTransactionNumber } from "@/utils/getTransactionNumber";
//
import { prisma } from "@/db.server";

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const { contactId, amount, type } = Object.fromEntries(
    formData.entries()
  ) as {
    contactId: string;
    amount: string;
    type: "Transfer" | "Receive";
  };

  if (!contactId || !amount || 0 > Number(amount)) {
    return json({ message: null, error: "Invalid data" }, { status: 400 });
  }

  const user = await getUser(request);

  if (!user) {
    return json({ message: null, error: "User not found" }, { status: 404 });
  }

  if (type === "Transfer" && user.balance < Number(amount)) {
    return json(
      {
        message: null,
        error: "Insufficient balance. Edit or Add a new card",
      },
      { status: 400 }
    );
  }

  const contact = await prisma.contact.findUnique({
    where: { id: contactId as string },
  });

  if (!contact) {
    return json({ message: null, error: "Contact not found" }, { status: 404 });
  }

  await prisma.transaction.create({
    data: {
      number: getTransactionNumber(),
      amount: Number(amount),
      contactId: contactId as string,
      userId,
      type,
      status: "Success",
      notification: {
        create: {
          title:
            type === "Receive"
              ? `${type} ${formatCurrency(Number(amount))}`
              : `${type} successful`,
          description:
            type === "Receive"
              ? `You received a payment of ${formatCurrency(
                  Number(amount)
                )} from ${contact.fullName}`
              : `You have successfully sent ${type} ${formatCurrency(
                  Number(amount)
                )} to ${contact.fullName}`,
          type,
          userId,
        },
      },
    },
  });

  await updateUserBalance({ userId, amount: Number(amount), type });

  return json({ success: "Transfer successful" });
}
