import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Heading,
  ScrollArea,
  ScrollBar,
} from "~/components/ui";
import PercentageChange from "./PercentageChange";
import { InfoTooltip } from "~/components/admin";
// utils
import { formatCurrency } from "~/utils/formatNumber";
import { baseChartOption } from "~/utils/baseChartOption";
//
import type { ApexOptions } from "apexcharts";
import type { SerializeFrom } from "@remix-run/node";

type ExpenseAnalysisProps = {
  chartHeight: number;
  expenseAnalysisData: SerializeFrom<{
    currentMonthTotal: number;
    previousMonthTotal: number;
    percentageChange: number;
  }>;
  expenseDataForYearChart: SerializeFrom<{ month: string; amount: number }[]>;
};

export default function ExpenseAnalysis({
  chartHeight,
  expenseAnalysisData,
  expenseDataForYearChart,
}: ExpenseAnalysisProps) {
  const chartData = [
    {
      name: "Expense",
      data: expenseDataForYearChart.map((item) => item.amount),
    },
  ];

  const chartCategories = expenseDataForYearChart.map((item) => item.month);

  const chartOptions = merge(baseChartOption(), {
    colors: ["#4D81E7"],
    chart: { animations: { enabled: true }, sparkline: { enabled: true } },
    stroke: {
      width: 2,
      curve: "straight",
    },
    xaxis: {
      categories: chartCategories,
    },
    markers: {
      size: 5,
      hover: {
        size: 9,
      },
    },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (seriesName: number) => formatCurrency(seriesName),
        title: {
          formatter: () => "Expense:",
        },
      },
      marker: { show: false },
    },
  }) as ApexOptions;

  return (
    <Card className="h-full space-y-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Expense Analysis</span>
          <InfoTooltip message="This year expense" />
        </CardTitle>
      </CardHeader>

      <CardContent className="flex h-full flex-col ">
        <div>
          <Heading variant="h5" className="pb-4 font-bold">
            {formatCurrency(expenseAnalysisData.currentMonthTotal)}
          </Heading>

          <PercentageChange
            percentageChange={expenseAnalysisData.percentageChange}
          />
        </div>

        <ScrollArea>
          <div className="w-[500px]">
            <ReactApexChart
              type="area"
              series={chartData}
              options={chartOptions}
              height={chartHeight}
              className="bottom-0 h-full"
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
