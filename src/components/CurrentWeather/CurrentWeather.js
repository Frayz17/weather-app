import React from 'react';
import { connect } from 'react-redux';
import DisplayModeToggler from 'components/DisplayModeToggler';
import {
  setWeatherCurrentByPosition,
  setWeatherCurrentByCity,
} from 'services/Store/reducers/weatherCurrent';
import { setCurrentLocationPosition } from 'services/Store/reducers/currentLocation';
import getCurrentWeatherLocation from 'services/requests/getCurrentWeatherLocation';
import windSpeedEquiv from 'utils/windSpeedEquiv';
import isObjEmpty from 'utils/isObjEmpty';
import Paper from '@material-ui/core/Paper';
import WeatherTemp from 'components/WeatherTemp';
import Typography from '@material-ui/core/Typography';
import currentWeatherStyle from './style/currentWeatherStyle';

export default connect((state) => {
  return {
    lat: state.currentLocation.byPosition.lat,
    lon: state.currentLocation.byPosition.lon,
    choosedCity: state.currentLocation.byCity,
    forecastByCity: state.weatherCurrent.byCity,
    forecastByPosition: state.weatherCurrent.byPosition,
    displayMode: state.currentLocation.displayBy,
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
      displayMode,
    }) => {
      const classes = currentWeatherStyle();

      const didWeatherByPositionLoad = !isObjEmpty(forecastByPosition);
      const didWeatherByCityLoad = !isObjEmpty(forecastByCity);

      let forecast = {};
      if (displayMode === 'city' && didWeatherByCityLoad) {
        forecast = forecastByCity;
      } else if (displayMode === 'position' && didWeatherByPositionLoad) {
        forecast = forecastByPosition;
      }

      React.useEffect(() => {
        if (choosedCity === null) {
          if (lat === null && lon === null) {
            console.log('CURRENT WEATHER______lat === null && lon === null');
            setCurrentLocationPosition();
          } else if (!didWeatherByPositionLoad) {
            console.log('CURRENT WEATHER______REQUEST');
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

      console.log('CURRENT WEATHER______ROOT');
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

              <DisplayModeToggler
                displayMode={displayMode}
                didWeatherByCityLoad={didWeatherByCityLoad}
                didWeatherByPositionLoad={didWeatherByPositionLoad}
              />
            </>
          )}
        </Paper>
      );
    }
  )
);
