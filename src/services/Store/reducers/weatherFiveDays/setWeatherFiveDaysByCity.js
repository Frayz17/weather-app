import { getStore } from 'services/Store';
import { WEATHER_FIVE_DAYS_SET_BY_CITY } from './weatherFiveDays';

export default (payload) => {
  getStore().dispatch({
    type: WEATHER_FIVE_DAYS_SET_BY_CITY,
    payload,
  });
};
