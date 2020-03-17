import React from 'react';
import { getCity } from 'services/requests/index';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import forecastStyle from './style';

export default function Forecast() {
  const classes = forecastStyle();
  const [loading, setLoading] = React.useState(true);
  const [city, setCity] = React.useState(getCity('mariupol'));

  // const city = getCity('mariupol');

  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       setCity(getCity('mariupol'));
  //       setLoading(true);
  //     } catch (error) {
  //       console.log('error ', error);
  //     }
  //   })();
  // }, [loading]);

  console.log('city: ', city);

  return (
    <Paper className={classes.root} variant='outlined'>
      {loading && (
        <>
          <Typography variant='h5'>18 C</Typography>
          <Typography variant='h6'>{city.name}</Typography>
          <Typography variant='subtitle1'>
            {city.sky}, Wind - {(city.wind || {}).speed} meter per second
          </Typography>
        </>
      )}
    </Paper>
  );
}
