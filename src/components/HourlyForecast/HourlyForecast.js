import React from 'react';
import windSpeedEquiv from 'utils/windSpeedEquiv';
import getTime from 'utils/getTime';
import Paper from '@material-ui/core/Paper';
import WeatherTemp from 'components/WeatherTemp';
import Typography from '@material-ui/core/Typography';
import hourlyForecastStyle from './style';
import roundNumber from 'utils/roundNumber';

export default React.memo(({ forecast, locationName }) => {
  const classes = hourlyForecastStyle();

  const time = getTime(forecast.dt, 'minutes');
  const date = getTime(forecast.dt, 'day and month');
  const windSpeed = roundNumber(forecast.wind.speed);
  const clouds = forecast.weather[0].description;

  return (
    <Paper className={classes.root} variant='outlined'>
      <Typography variant='h6'>{locationName}</Typography>

      <Typography variant='h6'>{time}</Typography>
      <Typography variant='subtitle1'>{date}</Typography>

      <WeatherTemp
        temp={forecast.main.temp}
        icon={forecast.weather[0].icon}
        width={50}
        TypoStyle={'h6'}
      />

      <Typography variant='subtitle1'>{clouds}</Typography>

      <Typography variant='subtitle1'>{windSpeed} m/s</Typography>

      <Typography variant='subtitle1'>{windSpeedEquiv(windSpeed)}</Typography>
    </Paper>
  );
});
