import { getStore } from 'services/Store';
import { WEATHER_CURRENT_SET_DISPLAY_BY_POSITION } from './weatherCurrent';

export default function setWeatherCurrentByCity(cityName) {
  getStore().dispatch({
    type: WEATHER_CURRENT_SET_DISPLAY_BY_POSITION,
  });
}
