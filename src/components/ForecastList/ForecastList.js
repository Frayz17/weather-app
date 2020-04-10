import React from 'react';
import HourlyForecast from 'components/HourlyForecast';
import Paper from '@material-ui/core/Paper';
import forecastListStyle from './style';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default React.memo(function ForecastList({
  forecastList = [],
  locationName = 'No Data',
  date = 'No Data',
}) {
  const classes = forecastListStyle();

  return (
    <Paper className={classes.root} variant='outlined'>
      <Box className={classes.locationWrapper}>
        <Typography variant={'h6'}>{date}</Typography>
      </Box>

      {forecastList.map((forecast) => {
        return (
          <HourlyForecast
            key={forecast.dt}
            forecast={forecast}
            locationName={locationName}
          />
        );
      })}
    </Paper>
  );
});
