import { makeStyles } from '@material-ui/core/styles';

const cityStyle = makeStyles((theme) => ({
  root: {},
  forecastWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    margin: 5
  },
  btn: {}
}));

export default cityStyle;
