function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

export default (timeData, precision = 'seconds') => {
  const date = new Date(timeData * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const day = date.getDate();

  const options = { month: 'long' };
  const month = new Intl.DateTimeFormat('en-US', options).format(date);

  switch (precision) {
    case 'minutes':
      return `
      ${addZero(hours)}:${addZero(minutes)}
    `;
    case 'hours':
      return `
      ${addZero(hours)}}
    `;
    case 'day and month':
      return `
      ${addZero(day)} ${addZero(month)} 
    `;
    default:
      return `
      ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}
    `;
  }
};
