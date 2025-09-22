import { json, redirect } from "@remix-run/node";
import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import invariant from "tiny-invariant";
import { z } from "zod";
import { parse } from "@conform-to/zod";
// components
import { Breadcrumb, Container } from "@/components/ui";
import { CardForm } from "./components";
//
import { prisma } from "@/db.server";
import { requireUserId } from "@/session.server";
import { updateUserBalance } from "@/models/user.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Card details | Clean House" },
  ];
};

export const loader: LoaderFunction = async ({ request, params }) => {
  invariant(params.cardId, "Card id should be defined");

  const card = await prisma.card.findUnique({
    where: { id: params.cardId },
  });

  if (!card) throw new Response("Card not found", { status: 404 });

  return json({ cardInfo: card });
};

export const editCardSchema = z.object({
  name: z.string({ required_error: "Card holder name is required" }),
  number: z.string({ required_error: "Card number is required" }),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/),
  cvc: z.string().regex(/^[0-9]{3,4}$/),
  amount: z.number(),
});

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.cardId, "Card id should be defined");

  const formData = await request.formData();
  const submission = parse(formData, { schema: editCardSchema });

  if (!submission.value || submission.intent !== "submit") {
    return json(submission, { status: 400 });
  }

  const userId = await requireUserId(request);

  const currentCardAmount = await prisma.card.findUnique({
    where: { id: params.cardId },
    select: { amount: true },
  });

  if (!currentCardAmount) throw new Response("Card not found", { status: 404 });

  await updateUserBalance({
    userId,
    amount: -currentCardAmount.amount,
    type: "Receive",
  });

  const card = await prisma.card.update({
    where: {
      id: params.cardId,
    },
    data: {
      ...submission.value,
      userId: userId,
    },
  });

  await updateUserBalance({ userId, amount: card.amount, type: "Receive" });

  return redirect("/dashboard/wallets");
}

export default function _route() {
  return (
    <>
      <div className="w-screen bg-[#1C2634]">
        <Container className="pb-40 pt-28 lg:px-0">
          <Breadcrumb
            heading="Wallets"
            links={[
              { name: "Dashboard", href: "/dashboard/overview" },
              { name: "Wallets", href: "/dashboard/wallets" },
              { name: "Card details", href: "" },
            ]}
          />
        </Container>
      </div>

      <Container className="relative -top-32  h-auto w-full  lg:px-0">
        <CardForm />
      </Container>
    </>
  );
}
