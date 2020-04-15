import React from 'react';
import Button from '@material-ui/core/Button';
import deleteCitiesListID from 'services/Store/reducers/citiesList/deleteCitiesListID';
import deleteCityBtnStyle from './style/deleteCityBtnStyle';

export default React.memo(() => {
  const classes = deleteCityBtnStyle();

  return (
    <Button
      size={'small'}
      color='secondary'
      className={classes.btn}
      onClick={() => deleteCitiesListID('701822')}
    >
      delete
    </Button>
  );
});
