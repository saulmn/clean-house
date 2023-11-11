export function getStatusColor(
  status: "Canceled" | "Success" | "Pending" | string
) {
  const colorMap: { [key: string]: string } = {
    Canceled: "destructive",
    Success: "default",
    Pending: "warning",
  };

  return colorMap[status] || "secondary";
}
