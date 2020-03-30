import { newStore, getStore, getState } from './Store.js';
import citiesList from './reducers/citiesList';
import currentPosition from './reducers/currentPosition';
import weatherToday from './reducers/weatherToday';

import StoreProvider from './StoreProvider';

export {
  newStore,
  getStore,
  getState,
  StoreProvider,
  citiesList,
  currentPosition,
  weatherToday
};
