import axios from 'axios';
import key from 'services/requests/key.js';

const getSetOfCities = async (city) => {
  const cityStrQuery = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  const result = await axios(cityStrQuery);
  const { sea_level, grnd_level, ...weatherData } = result.data.main;

  const data = {
    name: result.data.name,
    sky: result.data.weather[0].main,
    wind: result.data.wind,
    ...weatherData
  };

  return data;
};

export default getSetOfCities;
