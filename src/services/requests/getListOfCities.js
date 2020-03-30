import axios from 'axios';
import key from 'services/requests/key.js';

const getListOfCities = async (citiesID) => {
  const cityStrQuery = `http://api.openweathermap.org/data/2.5/group?id=${citiesID}&units=metric&appid=${key}`;

  const result = await axios(cityStrQuery);

  return result.data.list;
};

export default getListOfCities;
