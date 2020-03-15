import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 36,
    backgroundColor: grey[300]
    // color: '#fff'
  },
  toolBar: {
    justifyContent: 'center',
    textTransform: 'uppercase'
  }
}));

export default useStyles;
