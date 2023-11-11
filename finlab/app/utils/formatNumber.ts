export const formatPercentage = (percentage: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(percentage);
};

export const formatCurrency = (amount: number) => {
  const lookup = ["", "k", "m", "b", "t", "q", "Q"];
  let i = 0;
  while (amount >= 1000 && i < lookup.length - 1) {
    amount /= 1000;
    i++;
  }
  return `$${amount.toFixed(2)}${lookup[i]}`;
};
