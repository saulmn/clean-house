import { type ActionArgs, redirect } from "@remix-run/node";
// models
import { updateUserBalance } from "~/models/user.server";
//
import { prisma } from "~/db.server";
import { requireUserId } from "~/session.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const { name, number, expiry, cvc } = Object.fromEntries(formData) as {
    name: string;
    number: string;
    expiry: string;
    cvc: string;
  };

  const userId = await requireUserId(request);

  const card = await prisma.card.create({
    data: {
      name,
      number,
      expiry,
      cvc,
      amount: 46782, // add default amount to card
      userId: userId,
    },
  });

  await updateUserBalance({ userId, amount: 46782, type: "Receive" });

  return redirect(`/dashboard/wallets/card/${card.id}/details`);
}
