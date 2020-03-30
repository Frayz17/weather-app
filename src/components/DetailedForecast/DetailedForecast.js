import React from 'react';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import { setWeatherToday } from 'services/Store/reducers/weatherToday';
import getWeatherByGeoLocation from 'services/requests/getWeatherByGeoLocation';
import setCurrentPosition from 'services/Store/reducers/currentPosition/setCurrentPosition';
import windSpeedEquiv from 'utils/windSpeedEquiv';
import getTime from 'utils/getTime';
import isObjEmpty from 'utils/isObjEmpty';
import Paper from '@material-ui/core/Paper';
import WeatherTemp from 'components/WeatherTemp';
import Typography from '@material-ui/core/Typography';
import forecastStyle from './style';

export default connect((state) => {
  return {
    lat: state.currentPosition.lat,
    lon: state.currentPosition.lon,
    didWeatherLoad: !isObjEmpty(state.weatherToday)
  };
})(function Forecast({ lat, lon, didWeatherLoad }) {
  const classes = forecastStyle();
  const forecast = getState().weatherToday;

  React.useEffect(() => {
    setCurrentPosition();
    if (lat !== null && lon !== null)
      (async () => {
        const data = await getWeatherByGeoLocation(lat, lon);
        setWeatherToday(data);
      })();
  }, [lat, lon]);

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

          <Typography variant='h6'>{forecast.name}</Typography>
          <Typography variant='subtitle1'>
            {forecast.weather[0].main}, {(forecast.wind || {}).speed} m/s -{' '}
            {windSpeedEquiv((forecast.wind || {}).speed)}
          </Typography>
          <Typography variant='subtitle1'>
            Sunrise - {getTime(forecast.sys.sunrise)}
          </Typography>
          <Typography variant='subtitle1'>
            Sunset - {getTime(forecast.sys.sunset)}
          </Typography>
        </>
      )}
    </Paper>
  );
});
