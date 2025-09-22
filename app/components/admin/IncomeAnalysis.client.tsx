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
} from "@/components/ui";
import PercentageChange from "./PercentageChange";
import { InfoTooltip } from "@/components/admin";

// utils
import { formatCurrency } from "@/utils/formatNumber";
import { baseChartOption } from "@/utils/baseChartOption";
//
import type { ApexOptions } from "apexcharts";
import type { SerializeFrom } from "@remix-run/node";

type IncomeAnalysisProps = {
  chartHeight: number;
  incomeAnalysisData: SerializeFrom<{
    currentMonthTotal: number;
    previousMonthTotal: number;
    percentageChange: number;
  }>;
  incomeDataForYearChart: SerializeFrom<{ month: string; amount: number }[]>;
};

export default function IncomeAnalysis({
  chartHeight,
  incomeAnalysisData,
  incomeDataForYearChart,
}: IncomeAnalysisProps) {
  const chartData = [
    {
      name: "Income",
      data: incomeDataForYearChart.map((item) => item.amount),
    },
  ];

  const chartCategories = incomeDataForYearChart.map((item) => item.month);

  const chartOptions = merge(baseChartOption(), {
    colors: ["#E7854D"],
    xaxis: {
      categories: chartCategories,
    },
    tooltip: {
      y: {
        formatter: (val: number) => formatCurrency(val),
      },
    },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return formatCurrency(val);
        },
      },
    },
  }) as ApexOptions;

  return (
    <Card className="h-min space-y-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Income Analysis</span>
          <InfoTooltip message="This year income" />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div>
          <Heading variant="h5" className="pb-4 font-bold">
            {formatCurrency(incomeAnalysisData.currentMonthTotal)}
          </Heading>

          <PercentageChange
            percentageChange={incomeAnalysisData.percentageChange}
          />
        </div>

        <ScrollArea className="w-full">
          <div className="w-[500px]">
            <ReactApexChart
              type="bar"
              series={chartData}
              options={chartOptions}
              height={chartHeight}
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
