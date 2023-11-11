import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// components
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui";
import { InfoTooltip } from "~/components/admin";
// utils
import { baseChartOption } from "~/utils/baseChartOption";
import { formatCurrency } from "~/utils/formatNumber";
//
import type { ApexOptions } from "apexcharts";
import type { SerializeFrom } from "@remix-run/node";

type ExpenseCategoryProps = {
  expenseByIndustryPercentage: SerializeFrom<
    {
      color: string;
      industry: string;
      amount: number;
      percentage: number;
    }[]
  >;
};

export default function ExpenseCategory({
  expenseByIndustryPercentage,
}: ExpenseCategoryProps) {
  const chartData = expenseByIndustryPercentage.map((item) => item.amount);
  const chartLabels = expenseByIndustryPercentage.map((item) =>
    item.industry.toUpperCase()
  );

  const chartOptions = merge(baseChartOption(), {
    colors: ["#31B099", "#E7854D", "#C65468", "#4D81E7"],
    labels: chartLabels,
    legend: {
      show: false,
    },
    stroke: { colors: ["#fff"], size: 20 },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (val: number) => formatCurrency(val),
      },
    },
  }) as ApexOptions;

  return (
    <Card className="h-min space-y-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Expense Category</span>
          <InfoTooltip message="Top expense categories" />
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-between xl:flex-row">
        <div className="relative">
          <ReactApexChart
            type="donut"
            series={chartData}
            options={chartOptions}
            height={220}
          />

          <div className="absolute left-1/2 top-1/2 flex h-[107px] w-[107px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-full bg-white text-center drop-shadow-[0px_0px_24px_rgba(0,0,0,0.09)] ">
            <div className="text-2xl font-bold text-secondary-500">100%</div>
            <div className="text-xs text-secondary-400">Data Recorded</div>
          </div>
        </div>

        <div className="space-x-2 space-y-6">
          {expenseByIndustryPercentage.map(
            ({ industry, amount, percentage, color }) => (
              <div
                key={industry}
                className="flex items-center justify-between text-sm text-secondary-500"
              >
                <div className="flex items-center">
                  <div
                    className="mr-2 h-4 w-4 rounded-full"
                    style={{ backgroundColor: color }}
                  />

                  <div className="whitespace-nowrap font-semibold capitalize text-secondary-400">
                    {industry} ({percentage.toFixed(2)}%)
                  </div>
                </div>
                <div className="ml-4 font-bold">{formatCurrency(amount)}</div>
              </div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}
