import React from 'react';
import ForecastList from 'components/ForecastList';
import getTime from 'utils/getTime';
import Box from '@material-ui/core/Box';

export default React.memo(({ forecast }) => {
  const forecastToday = forecast.listByDays;

  return (
    <Box>
      {forecastToday.map((forecast) => {
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
