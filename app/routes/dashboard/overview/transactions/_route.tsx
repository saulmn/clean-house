import { json } from "@remix-run/node";
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
// components
import {
  RenderRowDetails,
  transactionsTableColumns,
  TransactionTable,
} from "./components";
//
import { prisma } from "~/db.server";
import type { TransactionStatus, TransactionType } from "@prisma/client";
// utils
import { getTransactionNumber } from "~/utils/getTransactionNumber";
import { getUser, requireUserId } from "~/session.server";
import { updateUserBalance } from "~/models/user.server";

export const meta: MetaFunction = () => [
  { title: "Transactions | Remix Template" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  const industry = url.searchParams.get("industry");
  const status = url.searchParams.get("status");
  const date = url.searchParams.get("date");

  const [startDate, endDate] = date ? date.split("to=") : ["", ""];

  const where = {
    type: type ? { equals: type as TransactionType } : undefined,
    status: status ? { equals: status as TransactionStatus } : undefined,
    company: industry ? { industry: { equals: industry } } : undefined,
    createdAt: {
      gte: startDate ? new Date(startDate) : undefined,
      lte: endDate
        ? isNaN(new Date(endDate).getTime())
          ? undefined
          : new Date(endDate)
        : undefined,
    },
  };

  const transactions = await prisma.transaction.findMany({
    where,
    include: { company: true, user: true, contact: true },
    orderBy: { createdAt: "desc" },
  });

  // TODO: Need to refact this
  const formatTransactions = transactions.map((transaction) => {
    return {
      id: transaction.id,
      number: transaction.number,
      amount: transaction.amount,
      status: transaction.status,
      type: transaction.type,
      createdAt: transaction.createdAt.toISOString(),
      company: transaction.company?.name
        ? transaction.company.name
        : (transaction.contact?.fullName as string),
      companyLogo: transaction.company?.logo
        ? transaction.company?.logo
        : (transaction.contact?.avatar as string),
      companyIndustry: transaction.company?.industry
        ? transaction.company?.industry
        : "Personal",
      subRows: {
        user: transaction.user.fullName as string,
        createdAt: transaction.updatedAt.toISOString(),
      },
    };
  });

  return json({ transactions: formatTransactions });
}

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request);
  const formData = await request.formData();

  const companyId = formData.get("companyId");
  const amount = formData.get("amount");
  const transactionType = formData.get("transactionType");
  const intent = formData.get("intent");

  switch (intent) {
    case "add-transaction":
      const user = await getUser(request);

      if (!user) {
        return json(
          { message: null, error: "User not found" },
          { status: 404 }
        );
      }

      if (transactionType === "Transfer" && user.balance < Number(amount)) {
        return json(
          {
            message: null,
            error: "Insufficient balance. Edit or Add a new card",
          },
          { status: 400 }
        );
      }

      await prisma.transaction.create({
        data: {
          number: getTransactionNumber(),
          amount: Number(amount),
          companyId: companyId as string,
          userId,
          type: transactionType as TransactionType,
          status: "Success",
        },
      });

      await updateUserBalance({
        userId,
        amount: Number(amount),
        type: transactionType as TransactionType,
      });

      return json({
        success: true,
        message: "Transaction created successfully",
      });

    case "delete-transaction":
      const transactionId = formData.get("transactionId");
      invariant(transactionId, "Transaction id is required");

      await prisma.transaction.delete({
        where: { id: String(transactionId) },
      });

      return json({
        success: true,
        message: "Transaction deleted successfully",
      });
    default:
      throw new Response(`Unsupported intent: ${intent}`, { status: 400 });
  }
}

export default function _route() {
  const { transactions } = useLoaderData<typeof loader>();

  return (
    <div className="rounded-2xl bg-white p-6">
      <TransactionTable
        data={transactions}
        columns={transactionsTableColumns}
        getRowCanExpand={() => true}
        renderSubComponent={RenderRowDetails}
      />
    </div>
  );
}
