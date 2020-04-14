export default (myStorage, cityID) => {
  let getStorageList = myStorage.getItem('citiesIDList');
  const re = new RegExp(`${cityID},`);
  const filteredList = getStorageList.split(re)[1];

  console.log(filteredList);
  myStorage.setItem('citiesIDList', `${filteredList}`);
};
