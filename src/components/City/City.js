import React from 'react';
import WeatherTemp from 'components/WeatherTemp';
import { setCurrentLocationCity } from 'services/Store/reducers/currentLocation';
import { windSpeedEquiv } from 'utils';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core//Paper';
import { roundNumber } from 'utils/';
import { cityStyle } from './style';

export default function City({ name, temp, windSpeed, weather, weatherIcon }) {
  const classes = cityStyle();
  const wind = roundNumber(windSpeed, 1);

  return (
    <Card onClick={() => setCurrentLocationCity(name)} className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Paper className={classes.forecastWrapper} variant='outlined'>
            <Typography variant='h6'>{name}</Typography>
            <WeatherTemp
              temp={temp}
              icon={weatherIcon}
              width={30}
              TypoStyle={'subtitle1'}
            />

            <Typography variant='body2'>{weather}</Typography>
            <Typography variant='body2'>
              {wind} m/s - {windSpeedEquiv(wind)}
            </Typography>
          </Paper>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
