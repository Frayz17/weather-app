import axios from 'axios';
import key from 'services/requests/key.js';

const getWeatherFiveDays = async (query) => {
  const cityStrQuery = `http://api.openweathermap.org/data/2.5/forecast?${query}&units=metric&appid=${key}`;

  const result = await axios(cityStrQuery);

  return result.data;
};

export default getWeatherFiveDays;
