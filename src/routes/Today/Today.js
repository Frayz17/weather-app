import React from 'react';
import { getState } from 'services/Store';
import getTime from 'utils/getTime';
import ForecastList from 'components/ForecastList';

export default () => {
  const forecastToday = getState().weatherFiveDays.listByDays[0];
  const date = getTime(forecastToday[0].dt, 'day and month');

  return (
    <>
      <ForecastList date={date} forecastList={forecastToday} />
    </>
  );
};
