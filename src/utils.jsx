export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;

  cart.forEach((item) => {
    totalAmount += item.amount;
    totalCost += item.amount * item.price;
  });

  totalCost = totalCost.toFixed(2);

  return { totalAmount, totalCost };
};
