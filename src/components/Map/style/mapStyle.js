import { makeStyles } from '@material-ui/core/styles';

const mapStyle = makeStyles((theme) => ({
  root: {
    paddingLeft: 20,
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      paddingLeft: 'unset',
      marginBottom: 20,
    },
  },
}));

export default mapStyle;
