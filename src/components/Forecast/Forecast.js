import React from 'react';
import { getCity } from 'services/requests/index';
import { windSpeedEquiv, getTime } from 'utils';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import WeatherIcon from 'components/WeatherIcon';
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

  if (city !== null) {
    console.log('timezone: ', city.timezone);
  }

  return (
    <Paper className={classes.root} variant='outlined'>
      {city && (
        <>
          <Box className={classes.tempWrapper}>
            <WeatherIcon icon={city.weather[0].icon} width={50} />
            <Typography variant='h5'>{Math.round(city.main.temp)}°C</Typography>
          </Box>
          <Typography variant='h6'>{city.name}</Typography>
          <Typography variant='subtitle1'>
            {city.sky}Wind - {(city.wind || {}).speed} m/s,{' '}
            {windSpeedEquiv((city.wind || {}).speed)}
          </Typography>
          <Typography variant='subtitle1'>
            Sunrise - {getTime(city.sys.sunrise)}
          </Typography>
          <Typography variant='subtitle1'>
            Sunset - {getTime(city.sys.sunset)}
          </Typography>
        </>
      )}
    </Paper>
  );
}
