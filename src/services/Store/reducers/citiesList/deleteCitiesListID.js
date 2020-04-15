import { getStore } from 'services/Store';
import { CITIES_LIST_DELETE_ID } from './citiesList';

const deleteCityIDFromReducer = (payload) => {
  getStore().dispatch({
    type: CITIES_LIST_DELETE_ID,
    payload,
  });
};

export default (cityID) => {
  const myStorage = window.localStorage;
  const getStorageList = myStorage.getItem('citiesIDList');

  if (getStorageList != null) {
    const filteredIDs = getStorageList
      .split(',')
      .filter((cityIDStorage) => cityIDStorage !== cityID)
      .join();

    myStorage.setItem('citiesIDList', `${filteredIDs}`);
    deleteCityIDFromReducer(filteredIDs);
  }
};
