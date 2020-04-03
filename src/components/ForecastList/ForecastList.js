import React from 'react';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import HourlyForecast from 'components/HourlyForecast';
import isObjEmpty from 'utils/isObjEmpty';
import Paper from '@material-ui/core/Paper';
import forecastListStyle from './style';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import getTime from 'utils/getTime';

export default connect((state) => {
  return {
    lat: state.currentPosition.lat,
    lon: state.currentPosition.lon,
    didWeatherLoad: !isObjEmpty(state.weatherFiveDays)
  };
})(
  React.memo(function ForecastList({ lat, lon, didWeatherLoad, range }) {
    const classes = forecastListStyle();
    const forecastListData = (getState().weatherFiveDays.list || []).slice(
      range.start,
      range.end
    );

    let firstForecastDay, firstForecastHour, forecastList, date, locationName;

    // choosed forecast only for this day
    if (didWeatherLoad) {
      firstForecastDay = new Date(forecastListData[0].dt * 1000).getDate();
      firstForecastHour = new Date(forecastListData[0].dt * 1000).getHours();

      date = getTime(forecastListData[0].dt, 'day and month');
      locationName = (getState().weatherFiveDays.city || {}).name;

      if (firstForecastHour <= 21) {
        forecastList = forecastListData.filter((forecast) => {
          const day = new Date(forecast.dt * 1000).getDate();

          return day === firstForecastDay;
        });
      }
    }

    console.log(getState().weatherFiveDays);

    return (
      <Paper className={classes.root} variant='outlined'>
        {didWeatherLoad && (
          <>
            <Typography variant={'h4'}>{locationName}</Typography>
            <Typography variant={'h6'}>{date}</Typography>

            {forecastList.map((forecast) => {
              const time = new Date(forecast.dt * 1000).getHours();
              console.log(time);
              return (
                <HourlyForecast
                  key={forecast.dt}
                  forecast={forecast}
                  locationName={locationName}
                />
              );
            })}
          </>
        )}
      </Paper>
    );
  })
);
