import { getStore } from 'services/Store';
import { CURRENT_LOCATION_SET_DISPLAY_BY_MODE } from './currentLocation';

export default (payload) => {
  getStore().dispatch({
    type: CURRENT_LOCATION_SET_DISPLAY_BY_MODE,
    payload,
  });
};
