import { getStore } from 'services/Store';
import { CURRENT_CITY_SET } from './currentCity';

export default (payload) => {
  getStore().dispatch({
    type: CURRENT_CITY_SET,
    payload: payload,
  });
};
