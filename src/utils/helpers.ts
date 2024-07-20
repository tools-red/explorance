const toTitleCase = (str: string) => {
  const result = str.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const generatePurchaseId = () => {
  const timestamp = Date.now().toString(36);
  const randomChars = Math.random().toString(36).substring(2, 7);
  return `PUR-${timestamp}${randomChars}`;
};

const convertDATE = (date: Date) => {
  const inputDate = new Date(date);

  const formattedDate = inputDate.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formattedDate;
};

export { toTitleCase, generatePurchaseId, convertDATE };
