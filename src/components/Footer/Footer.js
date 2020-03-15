import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './style/useStyles';

export default React.memo(function Footer() {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();
  return (
    <Box className={classes.root}>
      <Typography variant={'subtitle1'}>©{currentYear}</Typography>
    </Box>
  );
});
