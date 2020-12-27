const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const dayOfweek = (date, days) => {
  const day = new Date(date).getDate();
  console.log(day);
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
};
const result = dayOfweek(new Date(2019, 0, 1), 14);
console.log(result);
