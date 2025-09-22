import { useState } from "react";
import { merge } from "lodash";
import { useLoaderData } from "@remix-run/react";
import ReactApexChart from "react-apexcharts";
// components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Label,
  Switch,
} from "@/components/ui";
import { InfoTooltip } from "@/components/admin";
// utils
import { baseChartOption } from "@/utils/baseChartOption";
//
import type { ApexOptions } from "apexcharts";
import type { loader } from "../_route";
import { formatCurrency } from "@/utils/formatNumber";

const chartOptions = merge(baseChartOption(), {
  legend: {
    show: false,
  },
  colors: ["#31B099", "#C65468"],
  stroke: {
    curve: "straight",
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
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

type ShownData = {
  income: boolean;
  expense: boolean;
};
export default function BalanceAnalytics() {
  const [shownData, setShownData] = useState<ShownData>({
    income: true,
    expense: true,
  });
  const { incomeDataForYearBarChart, expenseDataForYearBarChart } =
    useLoaderData<typeof loader>();

  const CHART_DATA = [
    {
      name: "Income",
      data: shownData.income
        ? incomeDataForYearBarChart.map((item) => item.amount)
        : [],
    },
    {
      name: "Expense",
      data: shownData.expense
        ? expenseDataForYearBarChart.map((item) => item.amount)
        : [],
    },
  ];

  return (
    <Card className="h-min space-y-4">
      <CardHeader className="flex justify-between gap-2 md:flex-row md:items-center">
        <CardTitle className="flex items-center gap-2">
          <span>Balance Analytics</span>
          <InfoTooltip message="All account amount" />
        </CardTitle>

        <div className="flex gap-5">
          <div className="flex items-center space-x-2">
            <Switch
              id="income"
              checked={shownData.income}
              onCheckedChange={(checked) =>
                setShownData({ ...shownData, income: checked })
              }
            />
            <Label htmlFor="income" className="text-secondary-400">
              Income
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="expense"
              checked={shownData.expense}
              onCheckedChange={(checked) =>
                setShownData({ ...shownData, expense: checked })
              }
              className="data-[state=checked]:bg-error-500"
            />
            <Label htmlFor="expense" className="text-secondary-400">
              Expense
            </Label>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ReactApexChart
          type="line"
          series={CHART_DATA}
          options={chartOptions}
          height={275}
        />
      </CardContent>
    </Card>
  );
}
