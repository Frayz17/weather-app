import { getStore } from 'services/Store';

const WEATHER_CURRENT_SET = 'WEATHER_CURRENT_SET';
const WEATHER_CURRENT_UNSET = 'WEATHER_CURRENT_UNSET';

export default (state = {}, action) => {
  switch (action.type) {
    case WEATHER_CURRENT_SET:
      return { ...action.payload };
    case WEATHER_CURRENT_UNSET:
      return {};

    default:
      return { ...state };
  }
};

function setWeatherCurrent(payload) {
  getStore().dispatch({
    type: WEATHER_CURRENT_SET,
    payload,
  });
}

export { WEATHER_CURRENT_SET, WEATHER_CURRENT_UNSET, setWeatherCurrent };
