const getDiff = (startDate, endDate) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const difference = Math.abs(endDate - startDate);
  const daysDiff = Math.floor(difference / day);
  const hoursDiff = Math.floor((difference % day) / hour);
  const minutesDiff = Math.floor((difference % hour) / minute);
  const secondsDiff = Math.floor((difference % minute) / second);
  return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`;
};

const start = new Date(2020, 10, 10, 13, 40, 7);
const end = new Date(2020, 11, 13, 15, 38, 1);
console.log(getDiff(start, end));
