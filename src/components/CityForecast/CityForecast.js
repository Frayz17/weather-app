import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CityForecastStyle from './style';

export default function CityForecast() {
  const classes = CityForecastStyle();
  return (
    <Paper className={classes.root} variant='outlined'>
      <Typography variant='h6'>Mariupol</Typography>
      <Typography variant='subtitle1'>18 C</Typography>
      <Typography variant='subtitle2'>
        Clear, Wind - 2.77 meter per second
      </Typography>
    </Paper>
  );
}
