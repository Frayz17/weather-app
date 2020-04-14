const CITIES_LIST_FORECASTS_SET = 'CITIES_LIST_FORECASTS_SET';
const CITIES_LIST_IDS_SET = 'CITIES_LIST_IDS_SET';
const CITIES_LIST_ID_ADD = 'CITIES_LIST_ID_ADD';
const CITIES_LIST_DELETE_CITY = 'CITIES_LIST_DELETE_CITY';

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
    case CITIES_LIST_ID_ADD:
      return {
        ...state,
        IDsList: state.IDsList + action.payload,
      };

    // case CITIES_LIST_DELETE_CITY:
    //   return [...action.payload];

    default:
      return { ...state };
  }
};

export {
  CITIES_LIST_FORECASTS_SET,
  CITIES_LIST_IDS_SET,
  CITIES_LIST_ID_ADD,
  CITIES_LIST_DELETE_CITY,
};
