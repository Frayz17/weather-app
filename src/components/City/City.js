import React from 'react';
import CityForecast from 'components/CityForecast';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';
import { cityStyle } from './style';

export default function City() {
  const classes = cityStyle();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <CityForecast />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
