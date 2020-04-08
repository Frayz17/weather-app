import React from 'react';
import windSpeedEquiv from 'utils/windSpeedEquiv';
import getTime from 'utils/getTime';
import Box from '@material-ui/core/Box';
import WeatherTemp from 'components/WeatherTemp';
import Typography from '@material-ui/core/Typography';
import hourlyForecastStyle from './style';
import roundNumber from 'utils/roundNumber';

export default React.memo(({ forecast, locationName }) => {
  const classes = hourlyForecastStyle();

  const time = getTime(forecast.dt, 'minutes');
  const date = getTime(forecast.dt, 'day and month');
  const windSpeed = roundNumber(forecast.wind.speed);
  const clouds = forecast.weather[0].main;

  return (
    <Box className={classes.root} variant='outlined'>
      <Typography variant='subtitle1' className={classes.time}>
        {time}
      </Typography>

      <Typography className={classes.weather} variant='subtitle1'>
        {date}
      </Typography>

      <Box className={classes.temp}>
        <WeatherTemp
          temp={forecast.main.temp}
          icon={forecast.weather[0].icon}
          width={25}
          TypoStyle={'subtitle1'}
        />
      </Box>

      <Typography className={classes.weather} variant='subtitle1'>
        {clouds}
      </Typography>

      <Typography className={classes.weather} variant='subtitle1'>
        {windSpeed} m/s
      </Typography>

      <Typography variant='subtitle1'>{windSpeedEquiv(windSpeed)}</Typography>
    </Box>
  );
});
