import React from 'react';
import CurrentWeather from 'components/CurrentWeather';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import isObjEmpty from 'utils/isObjEmpty';
import ForecastList from 'components/ForecastList';
import getTime from 'utils/getTime';
import Box from '@material-ui/core/Box';

export default connect((state) => {
  return {
    lat: state.currentPosition.lat,
    lon: state.currentPosition.lon,
    didWeatherLoad: !isObjEmpty(state.weatherFiveDays),
  };
})(({ didWeatherLoad }) => {
  const forecastListData = getState().weatherFiveDays.list || [];
  console.log(getState().weatherFiveDays);
  console.log(getState().weatherFiveDays.listByDays[0]);
  const forecastByDays = getState().weatherFiveDays.listByDays;

  // console.log(forecastListData);

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

    // sliceForecastByDays(forecastListData);

    // choosed forecast only for this day
    // if (firstForecastHour !== 0) {
    //   forecastList = forecastListData.filter((forecast) => {
    //     const day = new Date(forecast.dt * 1000).getDate();

    //     return day === firstForecastDay;
    //   });
    // } else {
    //   date = getTime(forecastListData[0].dt - 86400, 'day and month');
    // }
  }

  return (
    <Box>
      <CurrentWeather />
      {didWeatherLoad &&
        forecastByDays.map((forecast) => {
          const date = getTime(forecast[0].dt, 'day and month');
          console.log(forecast);
          return (
            <ForecastList
              key={forecast[0].dt}
              locationName={locationName}
              date={date}
              forecastList={forecast}
            />
          );
        })}
    </Box>
  );
});
