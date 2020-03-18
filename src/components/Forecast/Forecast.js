import React from 'react';
import { getCity } from 'services/requests/index';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import forecastStyle from './style';

export default function Forecast() {
  const classes = forecastStyle();
  const [city, setCity] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await getCity('mariupol');
      setCity(data);
    })();
  }, []);

  console.log('city: ', city);

  return (
    <Paper className={classes.root} variant='outlined'>
      {city && (
        <>
          <Typography variant='h5'>{Math.round(city.temp)}°C</Typography>
          <Typography variant='h6'>{city.name}</Typography>
          <Typography variant='subtitle1'>
            {city.sky}, Wind - {(city.wind || {}).speed} meter per second
          </Typography>
        </>
      )}
    </Paper>
  );
}
