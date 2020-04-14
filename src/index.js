import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  newStore,
  StoreProvider,
  citiesList,
  // currentPosition,
  weatherCurrent,
  weatherFiveDays,
  // currentCity,
  currentLocation,
} from 'services/Store';

newStore({
  citiesList,
  // currentPosition,
  weatherCurrent,
  weatherFiveDays,
  // currentCity,
  currentLocation,
});

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
