export const format = (value?: number) => {
  if (!value) return;
  return new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
