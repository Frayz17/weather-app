import { makeStyles } from '@material-ui/core/styles';

const forecastStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    minWidth: 410,
    padding: 15,
  },
  locationWrapper: {
    marginBottom: 20,
  },
}));

export default forecastStyle;
