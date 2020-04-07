import { makeStyles } from '@material-ui/core/styles';

const tomorrowStyle = makeStyles((theme) => {
  return {
    flexWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 30,

      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
  };
});

export default tomorrowStyle;
