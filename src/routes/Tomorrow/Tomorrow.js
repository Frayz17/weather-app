import React from 'react';
import getTime from 'utils/getTime';
import ForecastList from 'components/ForecastList';

export default ({ forecast }) => {
  const forecastToday = forecast.listByDays[1];
  const date = getTime(forecastToday[1].dt, 'day and month');

  return <ForecastList date={date} forecastList={forecastToday} />;
};
