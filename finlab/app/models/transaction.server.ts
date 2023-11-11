import { prisma } from "~/db.server";

export async function getExpenseByCategory() {
  const transactions = await prisma.transaction.findMany({
    where: {
      type: { in: ["Subscribe", "Transfer"] },
    },
    include: { company: true },
  });

  const expenseByIndustry = transactions.reduce((acc, cur) => {
    const industry = cur.company?.industry;
    if (industry) {
      acc[industry] = acc[industry] || 0;
      acc[industry] += cur.amount;
    }
    return acc;
  }, {} as Record<string, number>);

  const totalExpense = Object.values(expenseByIndustry).reduce(
    (acc, cur) => acc + cur,
    0
  );

  const expenseByIndustryPercentage = Object.entries(expenseByIndustry)
    .map(([industry, amount]) => ({
      industry,
      amount,
      percentage: (amount / totalExpense) * 100,
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .map((item, index) => ({
      ...item,
      color: ["#31B099", "#E7854D", "#C65468", "#4D81E7", "#82AD0C"][index],
    }))
    .slice(0, 4);

  return expenseByIndustryPercentage;
}

export async function getIncomeAnalysisData() {
  const today = new Date();
  const currentMonthFirstDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  );
  const currentMonthLastDay = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  );
  const previousMonthFirstDay = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    1
  );
  const previousMonthLastDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    0
  );

  const currentMonthTransactions = await prisma.transaction.findMany({
    where: {
      type: "Receive",
      createdAt: {
        gte: currentMonthFirstDay,
        lt: currentMonthLastDay,
      },
    },
    include: { company: true },
  });

  const previousMonthTransactions = await prisma.transaction.findMany({
    where: {
      createdAt: {
        gte: previousMonthFirstDay,
        lt: previousMonthLastDay,
      },
    },
    include: { company: true },
  });

  const currentMonthTotal = currentMonthTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const previousMonthTotal = previousMonthTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  let percentageChange: number | null = null;

  if (previousMonthTotal === 0 && currentMonthTotal > 0) {
    percentageChange = 100;
  } else if (previousMonthTotal === 0 && currentMonthTotal === 0) {
    percentageChange = 0;
  } else {
    percentageChange = Math.round(
      ((currentMonthTotal - previousMonthTotal) / previousMonthTotal) * 100
    );
  }

  return {
    currentMonthTotal,
    previousMonthTotal,
    percentageChange,
  };
}

export async function getIncomeDataForYearChart() {
  const today = new Date();
  const year = today.getFullYear();

  const transactions = await prisma.transaction.findMany({
    where: {
      type: "Receive",
      AND: [
        { createdAt: { gte: new Date(year, 0, 1) } },
        { createdAt: { lt: new Date(year + 1, 0, 1) } },
        { amount: { gt: 0 } },
      ],
    },
    orderBy: { createdAt: "asc" },
  });

  const incomeData: { month: string; amount: number }[] = [];

  for (let i = 0; i < 12; i++) {
    const monthName = new Date(year, i).toLocaleString("default", {
      month: "short",
    });
    const monthTotal = transactions
      .filter((transaction) => transaction.createdAt.getMonth() === i)
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    incomeData.push({ month: monthName, amount: monthTotal });
  }

  return incomeData;
}

export async function getExpenseAnalysisData() {
  const today = new Date();
  const currentMonthFirstDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  );
  const currentMonthLastDay = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  );
  const previousMonthFirstDay = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    1
  );
  const previousMonthLastDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    0
  );

  const currentMonthTransactions = await prisma.transaction.findMany({
    where: {
      type: { in: ["Subscribe", "Transfer"] },
      createdAt: {
        gte: currentMonthFirstDay,
        lt: currentMonthLastDay,
      },
    },
    include: { company: true },
  });

  const previousMonthTransactions = await prisma.transaction.findMany({
    where: {
      createdAt: {
        gte: previousMonthFirstDay,
        lt: previousMonthLastDay,
      },
    },
    include: { company: true },
  });

  const currentMonthTotal = currentMonthTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const previousMonthTotal = previousMonthTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  let percentageChange: number | null = null;

  if (previousMonthTotal === 0 && currentMonthTotal > 0) {
    percentageChange = 100;
  } else if (previousMonthTotal === 0 && currentMonthTotal === 0) {
    percentageChange = 0;
  } else {
    percentageChange = Math.round(
      ((currentMonthTotal - previousMonthTotal) / previousMonthTotal) * 100
    );
  }

  return {
    currentMonthTotal,
    previousMonthTotal,
    percentageChange,
  };
}

export async function getExpenseDataForYearChart() {
  const today = new Date();
  const year = today.getFullYear();

  const transactions = await prisma.transaction.findMany({
    where: {
      type: { in: ["Subscribe", "Transfer"] },
      AND: [
        { createdAt: { gte: new Date(year, 0, 1) } },
        { createdAt: { lt: new Date(year + 1, 0, 1) } },
        { amount: { gt: 0 } },
      ],
    },
    orderBy: { createdAt: "asc" },
  });

  const incomeData: { month: string; amount: number }[] = [];

  for (let i = 0; i < 12; i++) {
    const monthName = new Date(year, i).toLocaleString("default", {
      month: "short",
    });
    const monthTotal = transactions
      .filter((transaction) => transaction.createdAt.getMonth() === i)
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    incomeData.push({ month: monthName, amount: monthTotal });
  }

  return incomeData;
}
