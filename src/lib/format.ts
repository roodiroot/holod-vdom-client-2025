export const format = (value?: number) => {
  if (!value) return;
  return new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
  }).format(value);
};
