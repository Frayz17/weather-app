import { makeStyles } from '@material-ui/core/styles';

const headerStyle = makeStyles((theme) => ({
  btn: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default headerStyle;
