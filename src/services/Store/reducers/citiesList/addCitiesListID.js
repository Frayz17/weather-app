import { getStore } from 'services/Store';
import { CITIES_LIST_ID_ADD } from './citiesList';

const addCityIDsToReducer = (payload) => {
  getStore().dispatch({
    type: CITIES_LIST_ID_ADD,
    payload,
  });
};

export default (cityID) => {
  const myStorage = window.localStorage;
  let getStorageList = myStorage.getItem('citiesIDList');

  if (getStorageList == null) {
    myStorage.setItem('citiesIDList', `${cityID},`);
    addCityIDsToReducer(cityID);
  } else {
    if (!getStorageList.split(',').includes(cityID)) {
      getStorageList += `${cityID},`;
      myStorage.setItem('citiesIDList', `${getStorageList}`);
      addCityIDsToReducer(cityID);
    }
  }
};
