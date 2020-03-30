export default (number, decimalCount) => {
  const multiplier = 10 * decimalCount;
  return (Math.round(number * multiplier) / multiplier).toFixed(decimalCount);
};
