import { makeStyles } from '@material-ui/core/styles';

const forecastStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
    padding: 20
  }
}));

export default forecastStyle;