import { makeStyles } from '@material-ui/core/styles';

const cityStyle = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  forecastWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  link: {
    textDecoration: 'none',
  },
}));

export default cityStyle;
