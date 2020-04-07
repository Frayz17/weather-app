import { makeStyles } from '@material-ui/core/styles';

const HourlyForecast = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  time: {
    marginRight: 20,
  },
  temp: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
  },
  weather: {
    marginRight: 10,
  },
}));

export default HourlyForecast;
