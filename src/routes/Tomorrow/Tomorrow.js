import React from 'react';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import isObjEmpty from 'utils/isObjEmpty';
import getTime from 'utils/getTime';
import ForecastList from 'components/ForecastList';
import CurrentWeather from 'components/CurrentWeather';
import Map from 'components/Map';
import Box from '@material-ui/core/Box';
import tomorrowStyle from './style/tomorrowStyle';

export default connect((state) => {
  return {
    lat: state.currentPosition.lat,
    lon: state.currentPosition.lon,
    didWeatherLoad: !isObjEmpty(state.weatherFiveDays),
  };
})(({ lat, lon, didWeatherLoad }) => {
  const classes = tomorrowStyle();

  const forecastListData = getState().weatherFiveDays.list || [];
  const coord = getState().weatherFiveDays.city.coord;

  let firstForecastDay,
    forecastList = [],
    date,
    locationName,
    firstForecastHour;

  if (didWeatherLoad) {
    firstForecastHour = new Date(forecastListData[0].dt * 1000).getHours();

    if (firstForecastHour !== 0) {
      firstForecastDay = new Date(forecastListData[0].dt * 1000).getDate();
    } else {
      firstForecastDay = new Date(
        (forecastListData[0].dt - 86400) * 1000
      ).getDate();
    }

    locationName = (getState().weatherFiveDays.city || {}).name;

    // choosed forecast only for Tomorrow
    forecastList = forecastListData.filter((forecast) => {
      const day = new Date(forecast.dt * 1000).getDate();

      return day === firstForecastDay + 1;
    });

    date = getTime(forecastList[0].dt, 'day and month');
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
