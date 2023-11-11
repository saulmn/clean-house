import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
// components
import { Breadcrumb, Container } from "~/components/ui";
import { Currency, TotalBalance } from "~/components/admin";
import { BalanceAnalytics, CardList, QuickTransfer } from "./components";
// models
import { getContacts } from "~/models/contact.server";
import {
  getIncomeDataForYearChart,
  getExpenseDataForYearChart,
} from "~/models/transaction.server";
//
import { requireUserId } from "~/session.server";
import { prisma } from "~/db.server";

export const meta: V2_MetaFunction = () => [
  { title: "Wallets | Remix Template" },
];

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);

  const contacts = await getContacts();
  const cards = await prisma.card.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  const incomeDataForYearBarChart = await getIncomeDataForYearChart();
  const expenseDataForYearBarChart = await getExpenseDataForYearChart();

  return json({
    contacts,
    cards,
    incomeDataForYearBarChart,
    expenseDataForYearBarChart,
  });
}

export default function _route() {
  const { contacts } = useLoaderData<typeof loader>();
  return (
    <>
      <div className="w-screen bg-[#1C2634]">
        <Container className="pb-40 pt-28 xl:px-0">
          <Breadcrumb
            heading="Wallets"
            links={[
              { name: "Dashboard", href: "/dashboard/overview" },
              { name: "Wallets", href: "" },
            ]}
          />
        </Container>
      </div>

      <Container className="relative -top-32 h-auto w-full xl:px-0">
        <div className="flex h-auto w-full flex-col gap-5 lg:flex-row">
          <div className="space-y-5 lg:w-[29%]">
            <TotalBalance contacts={contacts} />

            <CardList />
          </div>

          <div className="space-y-5 lg:w-[71%]">
            <ClientOnly
              fallback={
                <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-white lg:h-[500px]">
                  <p>Loading</p>
                </div>
              }
            >
              {() => <BalanceAnalytics />}
            </ClientOnly>

            <div className="flex w-full flex-col gap-5 xl:flex-row">
              <QuickTransfer contacts={contacts} />

              <div className="basis-5/12">
                <Currency />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
