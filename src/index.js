import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { newStore, StoreProvider } from 'services/Store';

newStore();

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
