import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";
import { useLoaderData } from "@remix-run/react";
// components
import { PockedPlans, RecentActivity } from "./components";
import {
  Currency,
  ExpenseAnalysis,
  ExpenseCategory,
  IncomeAnalysis,
  TotalBalance,
} from "@/components/admin";
// models
import {
  getExpenseAnalysisData,
  getExpenseByCategory,
  getExpenseDataForYearChart,
  getIncomeAnalysisData,
  getIncomeDataForYearChart,
} from "@/models/transaction.server";
import { getContacts } from "@/models/contact.server";
//
import { prisma } from "@/db.server";

export const meta: MetaFunction = () => [
  { title: "Dashboard | Clean House" },
];

export async function loader() {
  const recentTransactions = await prisma.transaction.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
    include: { company: true, contact: true },
  });
  const contacts = await getContacts();
  const expenseByIndustryPercentage = await getExpenseByCategory();
  const incomeAnalysisData = await getIncomeAnalysisData();
  const incomeDataForYearChart = await getIncomeDataForYearChart();
  const expenseAnalysisData = await getExpenseAnalysisData();
  const expenseDataForYearChart = await getExpenseDataForYearChart();

  return json({
    contacts,
    incomeAnalysisData,
    recentTransactions,
    expenseAnalysisData,
    incomeDataForYearChart,
    expenseDataForYearChart,
    expenseByIndustryPercentage,
  });
}

export default function _route() {
  const {
    contacts,
    incomeAnalysisData,
    expenseAnalysisData,
    incomeDataForYearChart,
    expenseDataForYearChart,
    expenseByIndustryPercentage,
  } = useLoaderData<typeof loader>();
  return (
    <div className="flex h-auto w-full flex-col gap-5 lg:flex-row">
      <div className="flex h-full w-full flex-col gap-5 lg:w-[29%]">
        <TotalBalance contacts={contacts} />

        <PockedPlans />
      </div>

      <div className="flex flex-col gap-5 lg:w-[42%]">
        <div>
          <ClientOnly
            fallback={
              <div className="flex h-72 w-full items-center justify-center rounded-2xl bg-white">
                <p>Loading</p>
              </div>
            }
          >
            {() => (
              <ExpenseCategory
                expenseByIndustryPercentage={expenseByIndustryPercentage}
              />
            )}
          </ClientOnly>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="col-span-1">
            <ClientOnly
              fallback={
                <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-white">
                  <p>Loading</p>
                </div>
              }
            >
              {() => (
                <IncomeAnalysis
                  chartHeight={155}
                  incomeAnalysisData={incomeAnalysisData}
                  incomeDataForYearChart={incomeDataForYearChart}
                />
              )}
            </ClientOnly>
          </div>

          <div className="col-span-1">
            <ClientOnly
              fallback={
                <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-white">
                  <p>Loading</p>
                </div>
              }
            >
              {() => (
                <ExpenseAnalysis
                  chartHeight={155}
                  expenseAnalysisData={expenseAnalysisData}
                  expenseDataForYearChart={expenseDataForYearChart}
                />
              )}
            </ClientOnly>
          </div>
        </div>
      </div>

      <div className="flex h-full w-full flex-col gap-5 lg:w-[29%]">
        <RecentActivity />

        <Currency all={false} />
      </div>
    </div>
  );
}
