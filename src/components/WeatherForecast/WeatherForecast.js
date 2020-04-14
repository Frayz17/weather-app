import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setWeatherFiveDaysByPosition,
  setWeatherFiveDaysByCity,
} from 'services/Store/reducers/weatherFiveDays';
import { setCurrentLocationPosition } from 'services/Store/reducers/currentLocation';
import CurrentWeather from 'components/CurrentWeather';
import getWeatherFiveDays from 'services/requests/getWeatherFiveDays';
import isObjEmpty from 'utils/isObjEmpty';
import Today from 'routes/Today';
import Tomorrow from 'routes/Tomorrow';
import FiveDays from 'routes/FiveDays';
import Map from 'components/Map';
import { Box } from '@material-ui/core';
import weatherForecastStyle from './style/weatherForecastStyle';

export default connect((state) => {
  return {
    lat: state.currentLocation.byPosition.lat,
    lon: state.currentLocation.byPosition.lon,
    choosedCity: state.currentLocation.byCity,
    displayMode: state.currentLocation.displayBy,
    weatherFiveDaysByCity: state.weatherFiveDays.byCity,
    weatherFiveDaysByPosition: state.weatherFiveDays.byPosition,
  };
})(
  ({
    lat,
    lon,
    choosedCity,
    weatherFiveDaysByCity,
    weatherFiveDaysByPosition,
    displayMode,
  }) => {
    const classes = weatherForecastStyle();

    const weatherFiveDaysByPositionLoad = !isObjEmpty(
      weatherFiveDaysByPosition
    );
    const weatherFiveDaysByCityLoad = !isObjEmpty(weatherFiveDaysByCity);

    let forecast = {};
    if (displayMode === 'city' && weatherFiveDaysByCityLoad) {
      forecast = weatherFiveDaysByCity;
    } else if (displayMode === 'position' && weatherFiveDaysByPositionLoad) {
      forecast = weatherFiveDaysByPosition;
    }
    const currentCity = ((forecast || {}).city || {}).name;

    React.useEffect(() => {
      if (displayMode === 'position') {
        if (lat === null && lon === null) {
          setCurrentLocationPosition();
        } else if (!weatherFiveDaysByPositionLoad) {
          (async () => {
            console.log('WEATHERFORECAST______USEEFFECT ASYNC BY POSITION');
            const query = `lat=${lat}&lon=${lon}`;
            const data = await getWeatherFiveDays(query);
            setWeatherFiveDaysByPosition(data);
          })();
        }
      } else if (displayMode === 'city') {
        if (!weatherFiveDaysByCityLoad || currentCity !== choosedCity) {
          (async () => {
            console.log('WEATHERFORECAST______USEEFFECT ASYNC BY CITY');
            const query = `q=${choosedCity}`;
            const data = await getWeatherFiveDays(query);
            setWeatherFiveDaysByCity(data);
          })();
        }
      }
    }, [
      lat,
      lon,
      choosedCity,
      weatherFiveDaysByPositionLoad,
      weatherFiveDaysByCityLoad,
      currentCity,
      displayMode,
    ]);

    return (
      !isObjEmpty(forecast) && (
        <Box>
          <CurrentWeather />
          <Box className={classes.root}>
            <Switch>
              <Route exact path={'/today'}>
                <Today forecast={forecast} />
              </Route>
              <Route exact path={'/tomorrow'}>
                <Tomorrow forecast={forecast} />
              </Route>
              <Route exact path={'/fivedays'}>
                <FiveDays forecast={forecast} />
              </Route>
            </Switch>
            <Map coord={forecast.city.coord} />
          </Box>
        </Box>
      )
    );
  }
);
