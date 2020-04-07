import React from 'react';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import isObjEmpty from 'utils/isObjEmpty';
import getTime from 'utils/getTime';
import ForecastList from 'components/ForecastList';
import CurrentWeather from 'components/CurrentWeather';
import Map from 'components/Map';
import Box from '@material-ui/core/Box';
import todayStyle from './style/todayStyle';

export default connect((state) => {
  return {
    lat: state.currentPosition.lat,
    lon: state.currentPosition.lon,
    didWeatherLoad: !isObjEmpty(state.weatherFiveDays),
  };
})(({ lat, lon, didWeatherLoad }) => {
  const classes = todayStyle();

  const forecastListData = getState().weatherFiveDays.list || [];
  const coord = getState().weatherFiveDays.city.coord;

  let firstForecastDay,
    firstForecastHour,
    forecastList = [],
    date,
    locationName;

  if (didWeatherLoad) {
    firstForecastDay = new Date(forecastListData[0].dt * 1000).getDate();
    firstForecastHour = new Date(forecastListData[0].dt * 1000).getHours();

    date = getTime(forecastListData[0].dt, 'day and month');
    locationName = (getState().weatherFiveDays.city || {}).name;

    // choosed forecast only for this day
    if (firstForecastHour !== 0) {
      forecastList = forecastListData.filter((forecast) => {
        const day = new Date(forecast.dt * 1000).getDate();

        return day === firstForecastDay;
      });
    } else {
      date = getTime(forecastListData[0].dt - 86400, 'day and month');
    }
  }

  return (
    <Box>
      <CurrentWeather />
      <Box className={classes.flexWrapper}>
        {didWeatherLoad && (
          <ForecastList
            locationName={locationName}
            date={date}
            forecastList={forecastList}
          />
        )}
        <Map coord={coord} />
      </Box>
    </Box>
  );
});
