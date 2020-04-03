import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import setCurrentPosition from 'services/Store/reducers/currentPosition/setCurrentPosition';
import isObjEmpty from 'utils/isObjEmpty';
import { setWeatherToday } from 'services/Store/reducers/weatherToday';
import getWeatherByGeoLocation from 'services/requests/getWeatherByGeoLocation';
import Home from 'routes/Home';
import WeatherForecast from 'modules/WeatherForecast';

export default connect((state) => {
  return {
    lat: state.currentPosition.lat,
    lon: state.currentPosition.lon,
    didWeatherLoad: !isObjEmpty(state.weatherToday)
  };
})(({ lat, lon, didWeatherLoad }) => {
  React.useEffect(() => {
    if (didWeatherLoad === false) {
      if (lat !== null && lon !== null) {
        (async () => {
          const data = await getWeatherByGeoLocation(lat, lon);
          setWeatherToday(data);
        })();
      } else {
        setCurrentPosition();
      }
    }
  }, [lat, lon, didWeatherLoad]);

  return (
    <Switch>
      <Route exact path={'/'}>
        <Home />
      </Route>
      <Route exact path={['/today', '/tomorrow', '/fivedays']}>
        <WeatherForecast />
      </Route>
    </Switch>
  );
});
