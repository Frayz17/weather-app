import React from 'react';
import { connect } from 'react-redux';
import {
  setWeatherCurrentByPosition,
  setWeatherCurrentByCity,
  setWeatherCurrentDisplayPosition,
} from 'services/Store/reducers/weatherCurrent';
import getCurrentWeatherLocation from 'services/requests/getCurrentWeatherLocation';
import setCurrentPosition from 'services/Store/reducers/currentPosition/setCurrentPosition';
import windSpeedEquiv from 'utils/windSpeedEquiv';
import isObjEmpty from 'utils/isObjEmpty';
import Paper from '@material-ui/core/Paper';
import WeatherTemp from 'components/WeatherTemp';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import currentWeatherStyle from './style/currentWeatherStyle';

export default connect((state) => {
  return {
    lat: state.currentPosition.lat,
    lon: state.currentPosition.lon,
    choosedCity: state.currentCity.cityName,
    forecastByCity: state.weatherCurrent.byCity,
    forecastByPosition: state.weatherCurrent.byPosition,
    forecastDisplayBy: state.weatherCurrent.displayBy,
  };
})(
  React.memo(
    ({
      lat,
      lon,
      windInfoFlag,
      choosedCity,
      forecastByCity,
      forecastByPosition,
      forecastDisplayBy,
    }) => {
      const classes = currentWeatherStyle();

      const didWeatherByPositionLoad = !isObjEmpty(forecastByPosition);
      const didWeatherByCityLoad = !isObjEmpty(forecastByCity);

      console.log(forecastDisplayBy);

      let forecast = {};
      if (forecastDisplayBy === 'city' && didWeatherByCityLoad) {
        forecast = forecastByCity;
      } else if (forecastDisplayBy === 'position' && didWeatherByPositionLoad) {
        forecast = forecastByPosition;
      }
      // if (choosedCity !== null && didWeatherByCityLoad) {
      //   forecast = forecastByCity;
      // } else if (didWeatherByPositionLoad) {
      //   forecast = forecastByPosition;
      // }

      React.useEffect(() => {
        if (choosedCity === null) {
          if (lat === null && lon === null) {
            setCurrentPosition();
          } else if (!didWeatherByPositionLoad) {
            console.log('CURRENT WEATHER______USEEFFECT ASYNC');
            (async () => {
              const query = `lat=${lat}&lon=${lon}`;
              const data = await getCurrentWeatherLocation(query);
              setWeatherCurrentByPosition(data);
            })();
          }
        } else {
          setWeatherCurrentByCity(choosedCity);
        }
      }, [lat, lon, choosedCity, didWeatherByPositionLoad]);

      return (
        <Paper className={classes.root} variant='outlined'>
          {!isObjEmpty(forecast) && (
            <>
              <WeatherTemp
                temp={forecast.main.temp}
                icon={forecast.weather[0].icon}
                width={50}
                TypoStyle={'h5'}
              />

              <Typography variant='h6'>
                {forecast.name}, {forecast.sys.country}
              </Typography>

              {windInfoFlag && (
                <Typography variant='subtitle1'>
                  {forecast.weather[0].main}, {(forecast.wind || {}).speed} m/s
                  - {windSpeedEquiv((forecast.wind || {}).speed)}
                </Typography>
              )}

              <Button
                size={'small'}
                className={classes.btn}
                onClick={() => setWeatherCurrentDisplayPosition()}
                disabled={forecastDisplayBy === 'position'}
              >
                by coords
              </Button>
            </>
          )}
        </Paper>
      );
    }
  )
);
