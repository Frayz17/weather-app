import React from 'react';
import { getState } from 'services/Store';
import ForecastList from 'components/ForecastList';
import getTime from 'utils/getTime';
import Box from '@material-ui/core/Box';

export default React.memo(() => {
  const forecastByDays = getState().weatherFiveDays.listByDays;

  return (
    <Box>
      {forecastByDays.map((forecast) => {
        const date = getTime(forecast[0].dt, 'day and month');
        return (
          <ForecastList
            key={forecast[0].dt}
            date={date}
            forecastList={forecast}
          />
        );
      })}
    </Box>
  );
});
