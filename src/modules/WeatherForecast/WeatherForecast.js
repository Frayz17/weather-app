import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import { setWeatherFiveDays } from 'services/Store/reducers/weatherFiveDays';
import CurrentWeather from 'components/CurrentWeather';
import getWeatherFiveDays from 'services/requests/getWeatherFiveDays';
import setCurrentPosition from 'services/Store/reducers/currentPosition/setCurrentPosition';
import isObjEmpty from 'utils/isObjEmpty';
import Today from 'routes/Today';
import Tomorrow from 'routes/Tomorrow';
import FiveDays from 'routes/FiveDays';
import Map from 'components/Map';
import { Box } from '@material-ui/core';
import weatherForecastStyle from './style/weatherForecastStyle';

export default connect((state) => {
  return {
    lat: state.currentPosition.lat,
    lon: state.currentPosition.lon,
    cityName: (state.weatherFiveDays.city || {}).name,
    didWeatherLoad: !isObjEmpty(state.weatherFiveDays),
  };
})(({ lat, lon, didWeatherLoad }) => {
  const classes = weatherForecastStyle();
  React.useEffect(() => {
    if (didWeatherLoad === false) {
      if (lat !== null && lon !== null) {
        (async () => {
          const query = `lat=${lat}&lon=${lon}`;
          const data = await getWeatherFiveDays(query);
          setWeatherFiveDays(data);
        })();
      } else {
        setCurrentPosition();
      }
    }
  }, [lat, lon, didWeatherLoad]);

  const coord = (((getState() || {}).weatherFiveDays || {}).city || {}).coord;

  return (
    didWeatherLoad && (
      <Box>
        <CurrentWeather />
        <Box className={classes.root}>
          <Switch>
            <Route exact path={'/today'}>
              <Today />
            </Route>
            <Route exact path={'/tomorrow'}>
              <Tomorrow />
            </Route>
            <Route exact path={'/fivedays'}>
              <FiveDays />
            </Route>
          </Switch>
          <Map coord={coord} />
        </Box>
      </Box>
    )
  );
});
