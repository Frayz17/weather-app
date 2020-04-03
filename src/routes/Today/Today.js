import React from 'react';
import ForecastList from 'components/ForecastList';
import CurrentWeather from 'components/CurrentWeather';
import Map from 'components/Map';
import Box from '@material-ui/core/Box';

export default function Today() {
  const range = {
    start: 0,
    end: 7
  };

  return (
    <Box>
      <CurrentWeather />
      <ForecastList range={range} />
      <Map />
    </Box>
  );
}
