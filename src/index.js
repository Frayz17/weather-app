import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  newStore,
  StoreProvider,
  citiesList,
  currentPosition,
  weatherCurrent,
  weatherFiveDays,
} from 'services/Store';

newStore({ citiesList, currentPosition, weatherCurrent, weatherFiveDays });

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
