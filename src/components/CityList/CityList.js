import React from 'react';
// import {connect} from 'react-redux'
import City from 'components/City';
import { getSetOfCities } from 'services/requests';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export default function CityList() {
  React.useEffect(() => {
    getSetOfCities();
  });

  return <Paper elevation={0}></Paper>;
}
