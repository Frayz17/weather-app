import { getStore } from 'services/Store';
import { CITIES_LIST_FORECASTS_SET } from './citiesList';

export default (payload) => {
  getStore().dispatch({
    type: CITIES_LIST_FORECASTS_SET,
    payload,
  });
};
