import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import setCurrentPosition from 'services/Store/reducers/currentPosition/setCurrentPosition';
import isObjEmpty from 'utils/isObjEmpty';
import { setWeatherCurrentByPosition } from 'services/Store/reducers/weatherCurrent';
import getWeatherByGeoLocation from 'services/requests/getWeatherByGeoLocation';
import Home from 'routes/Home';
import WeatherForecast from 'modules/WeatherForecast';

export default connect((state) => {
  return {
    lat: state.currentPosition.lat,
    lon: state.currentPosition.lon,
    citiesList: state.citiesList,
    didWeatherLoad: !isObjEmpty(state.weatherCurrent),
  };
})(({ lat, lon, citiesList, didWeatherLoad }) => {
  React.useEffect(() => {
    if (didWeatherLoad === false) {
      if (lat !== null && lon !== null) {
        (async () => {
          const data = await getWeatherByGeoLocation(lat, lon);
          setWeatherCurrentByPosition(data);
        })();
      } else {
        setCurrentPosition();
      }
    }
  }, [lat, lon, didWeatherLoad]);

  // console.log(citiesList);

  // const citiesName = citiesList.map((city) => `${city.name.toLowerCase()}`);
  // const homeAndCities = citiesName.map((cityName) => `/${cityName}`);
  // const daysAndCities = citiesName.map(
  //   (cityName) =>
  //     `/${cityName}/today, /${cityName}/tomorrow, /${cityName}/fivedays`
  // );

  const timeIntervals = ['/today', '/tomorrow', '/fivedays'];
  const pathsDaily = timeIntervals
    .map((interval) => `/city/:cityname${interval}`)
    .concat(timeIntervals);

  return (
    <Switch>
      <Route exact path={['/', '/city/:cityname']}>
        <Home />
      </Route>
      <Route exact path={pathsDaily}>
        <WeatherForecast />
      </Route>
    </Switch>
  );
});
