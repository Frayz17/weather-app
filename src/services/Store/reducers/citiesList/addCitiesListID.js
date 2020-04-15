import { getStore } from 'services/Store';
import { CITIES_LIST_ADD_ID } from './citiesList';

const addCityIDsToReducer = (payload) => {
  getStore().dispatch({
    type: CITIES_LIST_ADD_ID,
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
    const isCityIDSavedAlredy = getStorageList.split(',').includes(cityID);
    if (!isCityIDSavedAlredy) {
      getStorageList += `${cityID},`;
      myStorage.setItem('citiesIDList', `${getStorageList}`);
      addCityIDsToReducer(cityID);
    }
  }
};
