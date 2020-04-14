import { getStore } from 'services/Store';
import { CURRENT_LOCATION_CITY_SET } from './currentLocation';

export default (payload) => {
  getStore().dispatch({
    type: CURRENT_LOCATION_CITY_SET,
    payload: payload,
  });
};
