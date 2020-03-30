import axios from 'axios';
import key from 'services/requests/key.js';

const getWeatherByGeoLocation = async (lat, lon) => {
  const cityStrQuery = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

  const result = await axios(cityStrQuery);

  return result.data;
};

export default getWeatherByGeoLocation;
