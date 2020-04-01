export default (number, decimalCount = 1) => {
  const multiplier = 10 * decimalCount;
  return (Math.round(number * multiplier) / multiplier).toFixed(decimalCount);
};
