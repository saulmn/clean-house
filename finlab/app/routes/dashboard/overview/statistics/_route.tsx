import type { V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
// components
import {
  ExpenseAnalysis,
  ExpenseCategory,
  IncomeAnalysis,
} from "~/components/admin";
import { BalanceStatistics, LastTransaction } from "./components";
// models
import {
  getExpenseAnalysisData,
  getExpenseByCategory,
  getExpenseDataForYearChart,
  getIncomeAnalysisData,
  getIncomeDataForYearChart,
} from "~/models/transaction.server";
//
import { prisma } from "~/db.server";

export const meta: V2_MetaFunction = () => [
  { title: "Statistics | Remix Template" },
];

export async function loader() {
  const recentTransactions = await prisma.transaction.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
    include: { company: true, contact: true },
  });
  const expenseByIndustryPercentage = await getExpenseByCategory();
  const incomeAnalysisData = await getIncomeAnalysisData();
  const incomeDataForYearChart = await getIncomeDataForYearChart();
  const expenseAnalysisData = await getExpenseAnalysisData();
  const expenseDataForYearChart = await getExpenseDataForYearChart();

  return json({
    recentTransactions,
    incomeAnalysisData,
    expenseAnalysisData,
    incomeDataForYearChart,
    expenseDataForYearChart,
    expenseByIndustryPercentage,
  });
}

export default function _route() {
  const {
    incomeAnalysisData,
    expenseAnalysisData,
    incomeDataForYearChart,
    expenseDataForYearChart,
    expenseByIndustryPercentage,
  } = useLoaderData<typeof loader>();

  return (
    <div className="flex h-auto w-full flex-col gap-5 lg:flex-col">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <ClientOnly
            fallback={
              <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-white">
                <p>Loading</p>
              </div>
            }
          >
            {() => (
              <IncomeAnalysis
                chartHeight={220}
                incomeAnalysisData={incomeAnalysisData}
                incomeDataForYearChart={incomeDataForYearChart}
              />
            )}
          </ClientOnly>
        </div>
        <div className="lg:col-span-1">
          <ClientOnly
            fallback={
              <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-white">
                <p>Loading</p>
              </div>
            }
          >
            {() => (
              <ExpenseAnalysis
                chartHeight={220}
                expenseAnalysisData={expenseAnalysisData}
                expenseDataForYearChart={expenseDataForYearChart}
              />
            )}
          </ClientOnly>
        </div>
        <div className="lg:col-span-2">
          <ClientOnly
            fallback={
              <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-white">
                <p>Loading</p>
              </div>
            }
          >
            {() => (
              <BalanceStatistics
                incomeDataForYearChart={incomeDataForYearChart}
              />
            )}
          </ClientOnly>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
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

        <LastTransaction />
      </div>
    </div>
  );
}
