import { getStore } from 'services/Store';

const CITIES_LIST_SET = 'CITIES_LIST_SET';
const CITIES_LIST_UNSET = 'CITIES_LIST_UNSET';
const CITIES_LIST_ADD_CITY = 'CITIES_LIST_ADD_CITY';
const CITIES_LIST_DELETE_CITY = 'CITIES_LIST_DELETE_CITY';

export default (state = [], action) => {
  switch (action.type) {
    case CITIES_LIST_SET:
      return [...action.payload];
    case CITIES_LIST_UNSET:
      return [];
    case CITIES_LIST_ADD_CITY:
      return [...action.payload];
    case CITIES_LIST_DELETE_CITY:
      return [...action.payload];

    default:
      return [...state];
  }
};

function citiesListSet(payload) {
  getStore().dispatch({
    type: CITIES_LIST_SET,
    payload
  });
}

export {
  CITIES_LIST_SET,
  CITIES_LIST_UNSET,
  CITIES_LIST_ADD_CITY,
  CITIES_LIST_DELETE_CITY,
  citiesListSet
};
