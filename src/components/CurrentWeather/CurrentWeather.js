import React from 'react';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import { setWeatherToday } from 'services/Store/reducers/weatherToday';
import getWeatherByGeoLocation from 'services/requests/getWeatherByGeoLocation';
import setCurrentPosition from 'services/Store/reducers/currentPosition/setCurrentPosition';
import windSpeedEquiv from 'utils/windSpeedEquiv';
import isObjEmpty from 'utils/isObjEmpty';
import Paper from '@material-ui/core/Paper';
import WeatherTemp from 'components/WeatherTemp';
import Typography from '@material-ui/core/Typography';
import currentWeatherStyle from './style/currentWeatherStyle';

export default connect((state) => {
  return {
    lat: state.currentPosition.lat,
    lon: state.currentPosition.lon,
    didWeatherLoad: !isObjEmpty(state.weatherToday),
  };
})(
  React.memo(({ lat, lon, didWeatherLoad, windInfoFlag }) => {
    const classes = currentWeatherStyle();
    const forecast = getState().weatherToday;
    const countryCode = (forecast.sys || {}).country;

    React.useEffect(() => {
      if (lat !== null && lon !== null && didWeatherLoad) {
        (async () => {
          const data = await getWeatherByGeoLocation(lat, lon);
          setWeatherToday(data);
        })();
      } else {
        setCurrentPosition();
      }
    }, [lat, lon, didWeatherLoad]);

    return (
      <Paper className={classes.root} variant='outlined'>
        {didWeatherLoad && (
          <>
            <WeatherTemp
              temp={forecast.main.temp}
              icon={forecast.weather[0].icon}
              width={50}
              TypoStyle={'h5'}
            />

            <Typography variant='h6'>
              {forecast.name}, {countryCode}
            </Typography>

            {windInfoFlag && (
              <Typography variant='subtitle1'>
                {forecast.weather[0].main}, {(forecast.wind || {}).speed} m/s -{' '}
                {windSpeedEquiv((forecast.wind || {}).speed)}
              </Typography>
            )}
          </>
        )}
      </Paper>
    );
  })
);
