import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  newStore,
  StoreProvider,
  citiesList,
  currentPosition,
  weatherToday
} from 'services/Store';

newStore({ citiesList, currentPosition, weatherToday });

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
