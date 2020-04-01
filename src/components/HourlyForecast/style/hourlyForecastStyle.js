import { makeStyles } from '@material-ui/core/styles';

const HourlyForecast = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    padding: 10
  },
  tempWrapper: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default HourlyForecast;
