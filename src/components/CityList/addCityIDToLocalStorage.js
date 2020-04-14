export default (myStorage, cityID) => {
  let getStorageList = myStorage.getItem('citiesIDList');

  if (getStorageList === null) {
    myStorage.setItem('citiesIDList', `${cityID},`);
  } else {
    getStorageList += `,${cityID}`;
    myStorage.setItem('citiesIDList', `${getStorageList}`);
  }
};
