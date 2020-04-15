import React from 'react';
import Button from '@material-ui/core/Button';
import deleteCitiesListID from 'services/Store/reducers/citiesList/deleteCitiesListID';
import deleteCityBtnStyle from './style/deleteCityBtnStyle';

export default React.memo(({ id }) => {
  const classes = deleteCityBtnStyle();

  console.log(id);

  return (
    <Button
      size={'small'}
      color='secondary'
      className={classes.btn}
      onClick={() => deleteCitiesListID(id)}
    >
      delete
    </Button>
  );
});
