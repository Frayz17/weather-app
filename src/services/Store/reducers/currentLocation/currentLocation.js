const CURRENT_LOCATION_POSITION_SET = 'CURRENT_LOCATION_POSITION_SET';
const CURRENT_LOCATION_CITY_SET = 'CURRENT_LOCATION_CITY_SET';
const CURRENT_LOCATION_SET_DISPLAY_BY_MODE =
  'CURRENT_LOCATION_SET_DISPLAY_BY_MODE';

export default (
  state = {
    byPosition: {
      lat: null,
      lon: null,
    },
    byCity: null,
    displayBy: 'position',
  },
  action
) => {
  switch (action.type) {
    case CURRENT_LOCATION_POSITION_SET:
      return {
        ...state,
        displayBy: 'position',
        byPosition: action.payload,
      };

    case CURRENT_LOCATION_CITY_SET:
      return {
        ...state,
        displayBy: 'city',
        byCity: action.payload,
      };

    case CURRENT_LOCATION_SET_DISPLAY_BY_MODE:
      return {
        ...state,
        displayBy: action.payload,
      };

    default:
      return { ...state };
  }
};

export {
  CURRENT_LOCATION_POSITION_SET,
  CURRENT_LOCATION_CITY_SET,
  CURRENT_LOCATION_SET_DISPLAY_BY_MODE,
};
