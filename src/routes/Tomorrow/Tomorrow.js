import React from 'react';
import { getState } from 'services/Store';
import getTime from 'utils/getTime';
import ForecastList from 'components/ForecastList';

export default () => {
  const forecastTomorrow = getState().weatherFiveDays.listByDays[1];
  const date = getTime(forecastTomorrow[0].dt, 'day and month');

  return (
    <>
      <ForecastList date={date} forecastList={forecastTomorrow} />
    </>
  );
};
