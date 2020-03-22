function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

export default (timeData) => {
  const date = new Date(timeData * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const time = `
    ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}
  `;

  return time;
};
