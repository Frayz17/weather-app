const WEATHER_CURRENT_SET_BY_POSITION = 'WEATHER_CURRENT_SET_BY_POSITION';
const WEATHER_CURRENT_SET_BY_CITY = 'WEATHER_CURRENT_SET_BY_CITY';
const WEATHER_CURRENT_SET_DISPLAY_BY_POSITION =
  'WEATHER_CURRENT_SET_DISPLAY_BY_POSITION';

export default (
  state = {
    byPosition: {},
    byCity: {},
    displayBy: 'position',
  },
  action
) => {
  switch (action.type) {
    case WEATHER_CURRENT_SET_BY_POSITION:
      return {
        ...state,
        byPosition: action.payload,
        displayBy: 'position',
      };
    case WEATHER_CURRENT_SET_BY_CITY:
      return {
        ...state,
        byCity: action.payload,
        displayBy: 'city',
      };
    case WEATHER_CURRENT_SET_DISPLAY_BY_POSITION:
      return {
        ...state,
        displayBy: 'position',
      };

    default:
      return { ...state };
  }
};

export {
  WEATHER_CURRENT_SET_BY_POSITION,
  WEATHER_CURRENT_SET_BY_CITY,
  WEATHER_CURRENT_SET_DISPLAY_BY_POSITION,
};
