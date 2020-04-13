import { getStore, getState } from 'services/Store';
import { WEATHER_CURRENT_SET_BY_CITY } from './weatherCurrent';

export default function setWeatherCurrentByCity(cityName) {
  const citiesList = getState().citiesList;

  const choosedCityWeather = citiesList.filter(
    (city) => cityName === city.name
  )[0];

  getStore().dispatch({
    type: WEATHER_CURRENT_SET_BY_CITY,
    payload: choosedCityWeather,
  });
}
