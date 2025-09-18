// app/utils/getStatusColor.ts
function getStatusColor(status) {
  const colorMap = {
    Canceled: "destructive",
    Success: "default",
    Pending: "warning"
  };
  return colorMap[status] || "secondary";
}

export {
  getStatusColor
};
//# sourceMappingURL=/build/_shared/chunk-O6V2WU6L.js.map
