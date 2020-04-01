import React from 'react';
import { getState } from 'services/Store';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default React.memo((location) => {
  console.log(location);
  const city = getState().weatherFiveDays.city;
  console.log(city);

  return (
    <Box>
      <Typography>123</Typography>
      <Typography>123</Typography>
      <Typography>123</Typography>
    </Box>
  );
});
