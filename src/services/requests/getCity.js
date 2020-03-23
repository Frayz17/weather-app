import axios from 'axios';
import key from 'services/requests/key.js';

const getCity = async (city) => {
  const cityStrQuery = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  const result = await axios(cityStrQuery);

  return result.data;
};

export default getCity;
