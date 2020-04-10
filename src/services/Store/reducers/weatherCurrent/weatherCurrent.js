import { getStore } from 'services/Store';

const WEATHER_CURRENT_SET_BY_POSITION = 'WEATHER_CURRENT_SET_BY_POSITION';
const WEATHER_CURRENT_SET_CITY = 'WEATHER_CURRENT_SET_CITY';

export default (
  state = {
    byPosition: {},
    byCity: {},
  },
  action
) => {
  switch (action.type) {
    case WEATHER_CURRENT_SET_BY_POSITION:
      return { ...state, byPosition: action.payload };
    case WEATHER_CURRENT_SET_CITY:
      return {
        ...state,
        byCity: {
          [action.payload.city]: { ...action.payload },
        },
      };

    default:
      return { ...state };
  }
};

function setWeatherCurrentByPosition(payload) {
  getStore().dispatch({
    type: WEATHER_CURRENT_SET_BY_POSITION,
    payload,
  });
}

function setWeatherCurrentByCity(payload) {
  getStore().dispatch({
    type: WEATHER_CURRENT_SET_BY_POSITION,
    payload,
  });
}

export {
  WEATHER_CURRENT_SET_BY_POSITION,
  WEATHER_CURRENT_SET_CITY,
  setWeatherCurrentByPosition,
  setWeatherCurrentByCity,
};
