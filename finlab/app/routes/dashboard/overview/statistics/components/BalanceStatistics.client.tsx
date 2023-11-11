import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ScrollArea,
  ScrollBar,
} from "~/components/ui";
import { InfoTooltip } from "~/components/admin";

// utils
import { formatCurrency } from "~/utils/formatNumber";
import { baseChartOption } from "~/utils/baseChartOption";
//
import type { ApexOptions } from "apexcharts";
import type { SerializeFrom } from "@remix-run/node";

type IncomeAnalysisProps = {
  incomeDataForYearChart: SerializeFrom<{ month: string; amount: number }[]>;
};

export default function BalanceStatistics({
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
    colors: ["#31B099"],
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
          <span>Balance Statistics</span>
          <InfoTooltip message="This year balance" />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ScrollArea className="w-full">
          <div className="">
            <ReactApexChart
              type="bar"
              series={chartData}
              options={chartOptions}
              height={300}
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
