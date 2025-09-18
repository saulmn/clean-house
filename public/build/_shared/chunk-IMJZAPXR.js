// app/utils/formatDate.ts
var formatDate = ({ date, type }) => {
  const dateObj = new Date(date);
  if (type === "short") {
    return new Intl.DateTimeFormat("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit"
    }).format(dateObj);
  }
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(dateObj);
};
var formatTime = (date) => {
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric"
  }).format(dateObj);
};
var formatToNow = (date) => {
  const dateObj = new Date(date);
  const now = /* @__PURE__ */ new Date();
  const diff = now.getTime() - dateObj.getTime();
  const seconds = Math.floor(diff / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  switch (true) {
    case seconds < 60:
      return `${seconds}s`;
    case minutes < 60:
      return `${minutes}m`;
    case hours < 24:
      return `${hours}h`;
    case days < 7:
      return `${days}d`;
    case weeks < 4:
      return `${weeks}w`;
    case months < 12:
      return `${months}mo`;
    default:
      return `${years}y`;
  }
};

export {
  formatDate,
  formatTime,
  formatToNow
};
//# sourceMappingURL=/build/_shared/chunk-IMJZAPXR.js.map
