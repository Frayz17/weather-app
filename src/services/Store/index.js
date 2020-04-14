import { newStore, getStore, getState } from './Store.js';
import citiesList from './reducers/citiesList';
// import currentPosition from './reducers/currentPosition';
import weatherCurrent from './reducers/weatherCurrent';
import weatherFiveDays from './reducers/weatherFiveDays';
// import currentCity from './reducers/currentCity';
import currentLocation from './reducers/currentLocation';

import StoreProvider from './StoreProvider';

export {
  newStore,
  getStore,
  getState,
  StoreProvider,
  citiesList,
  // currentPosition,
  weatherCurrent,
  weatherFiveDays,
  // currentCity,
  currentLocation,
};
