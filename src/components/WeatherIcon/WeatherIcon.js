import React from 'react';
import getWeatherIcon from './iconsData';

export default function WeatherIcon({ icon, width }) {
  return (
    <img
      style={{ display: 'block', width }}
      src={getWeatherIcon(`w${icon}`)}
      alt={'clear'}
    />
  );
}
