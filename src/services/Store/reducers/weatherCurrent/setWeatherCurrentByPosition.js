import { getStore } from 'services/Store';
import { WEATHER_CURRENT_SET_BY_POSITION } from './weatherCurrent';

export default (payload) => {
  getStore().dispatch({
    type: WEATHER_CURRENT_SET_BY_POSITION,
    payload,
  });
};
