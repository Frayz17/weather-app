import React from 'react';
import Button from '@material-ui/core/Button';
import addCitiesListID from 'services/Store/reducers/citiesList/addCitiesListID';
import addCityBtnStyle from './style/addCityBtnStyle';

export default React.memo(() => {
  const classes = addCityBtnStyle();

  return (
    <Button
      size={'small'}
      color='primary'
      className={classes.btn}
      onClick={() => addCitiesListID('701822')}
    >
      add City
    </Button>
  );
});
