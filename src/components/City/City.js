import React from 'react';
import CityForecast from 'components/CityForecast';
import WeatherTemp from 'components/WeatherTemp';
import { windSpeedEquiv } from 'utils';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core//Paper';
import { Link as RouterLink } from 'react-router-dom';
import { roundNumber } from 'utils/';
import { cityStyle } from './style';

export default function City({ name, temp, windSpeed, weather, weatherIcon }) {
  const classes = cityStyle();
  const wind = roundNumber(windSpeed, 1);

  return (
    <Card className={classes.root}>
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

            <Typography variant='body2'>
              {weather}, {wind} m/s - {windSpeedEquiv(wind)}
            </Typography>
          </Paper>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
