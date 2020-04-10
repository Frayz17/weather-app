import { makeStyles } from '@material-ui/core/styles';

const weatherForecastStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
    // alignItems: 'center',
  },
}));

export default weatherForecastStyle;
