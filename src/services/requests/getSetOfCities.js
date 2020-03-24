import axios from 'axios';
import key from 'services/requests/key.js';

const getSetOfCities = async (citiesID) => {
  const cityStrQuery = `http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=${key}`;

  const result = await axios(cityStrQuery);

  console.log(result.data);

  return result.data;
};

export default getSetOfCities;
