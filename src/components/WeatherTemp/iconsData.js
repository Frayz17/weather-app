import w01d from 'static/icons/weatherIcons/01d@2x.png';
import w02d from 'static/icons/weatherIcons/02d@2x.png';
import w03d from 'static/icons/weatherIcons/03d@2x.png';
import w04d from 'static/icons/weatherIcons/04d@2x.png';
import w09d from 'static/icons/weatherIcons/09d@2x.png';
import w10d from 'static/icons/weatherIcons/10d@2x.png';
import w11d from 'static/icons/weatherIcons/11d@2x.png';
import w13d from 'static/icons/weatherIcons/13d@2x.png';
import w50d from 'static/icons/weatherIcons/50d@2x.png';

import w01n from 'static/icons/weatherIcons/01n@2x.png';
import w02n from 'static/icons/weatherIcons/02n@2x.png';
import w03n from 'static/icons/weatherIcons/03n@2x.png';
import w04n from 'static/icons/weatherIcons/04n@2x.png';
import w09n from 'static/icons/weatherIcons/09n@2x.png';
import w10n from 'static/icons/weatherIcons/10n@2x.png';
import w11n from 'static/icons/weatherIcons/11n@2x.png';
import w13n from 'static/icons/weatherIcons/13n@2x.png';
import w50n from 'static/icons/weatherIcons/50n@2x.png';

const icons = {
  w01d,
  w02d,
  w03d,
  w04d,
  w09d,
  w10d,
  w11d,
  w13d,
  w50d,
  w01n,
  w02n,
  w03n,
  w04n,
  w09n,
  w10n,
  w11n,
  w13n,
  w50n
};

const getWeatherIcon = (key) => icons[key];

export default getWeatherIcon;
