import { makeStyles } from '@material-ui/core/styles';

const forecastStyle = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
    padding: 20,
  },
  tempWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    top: 0,
    left: 0,
    // color: '#EC6E4C',
  },
}));

export default forecastStyle;
