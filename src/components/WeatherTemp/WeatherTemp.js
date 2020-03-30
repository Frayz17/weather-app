import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import getWeatherIcon from './iconsData';
import weatherTempStyle from './style/weatherTempStyle';

export default function WeatherTemp({ temp, icon, width, TypoStyle }) {
  const classes = weatherTempStyle();
  return (
    <Box className={classes.root}>
      <img
        style={{ display: 'inline-block', width }}
        src={getWeatherIcon(`w${icon}`)}
        alt={'clear'}
      />
      <Typography variant={TypoStyle}>{Math.round(temp)}°C</Typography>
    </Box>
  );
}
