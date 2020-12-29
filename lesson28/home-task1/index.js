const shmoment = initValue => {
  const result = {
    years: initValue.getFullYear(),
    months: initValue.getMonth(),
    days: initValue.getDate(),
    hours: initValue.getHours(),
    minutes: initValue.getMinutes(),
    seconds: initValue.getSeconds(),
    milliseconds: initValue.getMilliseconds(),
  };

  const setNewDate = {
    add(date, value) {
      result[date] += value;
      return this;
    },

    subtract(date, value) {
      result[date] -= value;
      return this;
    },

    result() {
      return new Date(...Object.values(result));
    },
  };
  return setNewDate;
};
console.log(
  shmoment(new Date(2020, 0, 7, 17, 17, 17))
    .add('minutes', 2)
    .add('days', 8)
    .subtract('years', 1)
    .result(),
);
