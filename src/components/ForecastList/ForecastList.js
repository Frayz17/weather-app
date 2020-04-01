import React from 'react';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import HourlyForecast from 'components/HourlyForecast';
import isObjEmpty from 'utils/isObjEmpty';
import Paper from '@material-ui/core/Paper';
import forecastListStyle from './style';

export default connect((state) => {
  return {
    lat: state.currentPosition.lat,
    lon: state.currentPosition.lon,
    didWeatherLoad: !isObjEmpty(state.weatherFiveDays)
  };
})(
  React.memo(function ForecastList({ lat, lon, didWeatherLoad, range }) {
    const classes = forecastListStyle();
    const forecastList = (getState().weatherFiveDays.list || []).slice(
      range.start,
      range.end
    );

    // const forecastListEdited = forecastList.map((forecast) => {
    //   if ()

    //   return forecast
    // })

    const locationName = (getState().weatherFiveDays.city || {}).name;

    console.log(getState().weatherFiveDays);

    return (
      <Paper className={classes.root} variant='outlined'>
        {didWeatherLoad && (
          <>
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
