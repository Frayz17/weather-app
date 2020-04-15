const CITIES_LIST_FORECASTS_SET = 'CITIES_LIST_FORECASTS_SET';
const CITIES_LIST_IDS_SET = 'CITIES_LIST_IDS_SET';
const CITIES_LIST_ADD_ID = 'CITIES_LIST_ADD_ID';
const CITIES_LIST_DELETE_ID = 'CITIES_LIST_DELETE_ID';

export default (
  state = {
    forecastsList: [],
    IDsList: '',
    // IDsList: '701822,2172797,636465,636804',
  },
  action
) => {
  switch (action.type) {
    case CITIES_LIST_FORECASTS_SET:
      return {
        ...state,
        forecastsList: action.payload,
      };
    case CITIES_LIST_IDS_SET:
      return {
        ...state,
        IDsList: action.payload,
      };
    case CITIES_LIST_ADD_ID:
      return {
        ...state,
        IDsList: state.IDsList + action.payload,
      };
    case CITIES_LIST_DELETE_ID:
      return {
        ...state,
        IDsList: action.payload,
      };

    // case CITIES_LIST_DELETE_ID:
    //   return [...action.payload];

    default:
      return { ...state };
  }
};

export {
  CITIES_LIST_FORECASTS_SET,
  CITIES_LIST_IDS_SET,
  CITIES_LIST_ADD_ID,
  CITIES_LIST_DELETE_ID,
};
