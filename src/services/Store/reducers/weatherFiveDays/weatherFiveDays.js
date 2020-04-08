import { getStore } from 'services/Store';
import sliceForecastByDays from './sliceForecastByDays';

const WEATHER_FIVE_DAYS_SET = 'WEATHER_FIVE_DAYS_SET';
const WEATHER_FIVE_DAYS_UNSET = 'WEATHER_FIVE_DAYS_UNSET';

export default (state = {}, action) => {
  switch (action.type) {
    case WEATHER_FIVE_DAYS_SET:
      const listByDays = sliceForecastByDays(action.payload.list);
      return { listByDays, ...action.payload };
    case WEATHER_FIVE_DAYS_UNSET:
      return {};

    default:
      return { ...state };
  }
};

function setWeatherFiveDays(payload) {
  getStore().dispatch({
    type: WEATHER_FIVE_DAYS_SET,
    payload,
  });
}

export { WEATHER_FIVE_DAYS_SET, WEATHER_FIVE_DAYS_UNSET, setWeatherFiveDays };
