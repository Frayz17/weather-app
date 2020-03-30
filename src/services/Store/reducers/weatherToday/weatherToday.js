import { getStore } from 'services/Store';

const WEATHER_TODAY_SET = 'WEATHER_TODAY_SET';
const WEATHER_TODAY_UNSET = 'WEATHER_TODAY_UNSET';

export default (state = {}, action) => {
  switch (action.type) {
    case WEATHER_TODAY_SET:
      return { ...action.payload };
    case WEATHER_TODAY_UNSET:
      return {};

    default:
      return { ...state };
  }
};

function setWeatherToday(payload) {
  getStore().dispatch({
    type: WEATHER_TODAY_SET,
    payload
  });
}

export { WEATHER_TODAY_SET, WEATHER_TODAY_UNSET, setWeatherToday };
