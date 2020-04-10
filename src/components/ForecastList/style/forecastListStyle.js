import { makeStyles } from '@material-ui/core/styles';

const forecastStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    minWidth: 450,
    padding: 15,
    marginBottom: 3,

    '&&:last-of-type': {
      marginBottom: 0,
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      minWidth: 'unset',
    },
  },
  locationWrapper: {
    marginBottom: 20,
  },
}));

export default forecastStyle;
