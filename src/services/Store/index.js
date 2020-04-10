import { newStore, getStore, getState } from './Store.js';
import citiesList from './reducers/citiesList';
import currentPosition from './reducers/currentPosition';
import weatherCurrent from './reducers/weatherCurrent';
import weatherFiveDays from './reducers/weatherFiveDays';

import StoreProvider from './StoreProvider';

export {
  newStore,
  getStore,
  getState,
  StoreProvider,
  citiesList,
  currentPosition,
  weatherCurrent,
  weatherFiveDays,
};
