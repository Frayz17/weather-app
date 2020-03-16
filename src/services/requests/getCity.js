import axios from 'axios';
import key from 'services/requests/key.js';
import { convertFC } from 'utils';

const getCity = async (city) => {
  const cityStrQuery = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  const result = await axios(cityStrQuery);

  const data = {
    name: result.data.name,
    sky: result.data.weather[0].main,
    ...result.data.main
  };

  console.log(data);
  console.log(result.data);

  return data;
};

export default getCity;
