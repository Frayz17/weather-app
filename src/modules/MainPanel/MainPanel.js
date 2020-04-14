import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'routes/Home';
import WeatherForecast from 'components/WeatherForecast';

export default () => {
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
};
