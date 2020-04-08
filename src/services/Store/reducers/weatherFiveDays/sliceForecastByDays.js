function getDay(timeStamp) {
  return new Date(timeStamp * 1000).getDate();
}

function filterForecastByDay(array, dayNumber) {
  return array.filter((item) => getDay(item.dt) === dayNumber);
}

export default (forecastList) => {
  let list = [...forecastList];

  const forecastByDays = [];
  let dayNumber, dayForecastList;

  while (list.length > 0) {
    dayNumber = getDay(list[0].dt);
    dayForecastList = filterForecastByDay(list, dayNumber);
    forecastByDays.push(dayForecastList);

    list = list.slice(dayForecastList.length);
  }

  return forecastByDays;
};
