import React from 'react';
import Box from '@material-ui/core/Box';
import mapStyle from './style/mapStyle';

export default function Map() {
  const classes = mapStyle();
  return <Box classname={classes.root}>MAP</Box>;
}
