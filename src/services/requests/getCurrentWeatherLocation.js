import axios from 'axios';
import key from 'services/requests/key.js';

const getCurrentWeatherLocation = async (query) => {
  try {
    const cityStrQuery = `http://api.openweathermap.org/data/2.5/weather?${query}&units=metric&appid=${key}`;

    const result = await axios(cityStrQuery);

    return result.data;
  } catch (error) {
    console.log('Cannot load Weather By Coords due of ', error);
    return {};
  }
};

export default getCurrentWeatherLocation;
