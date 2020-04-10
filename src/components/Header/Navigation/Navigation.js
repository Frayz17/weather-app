import React from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import navData from './navData';
import Button from '@material-ui/core/Button';
import navigationStyle from './style/navigationStyle';

export default React.memo(() => {
  const classes = navigationStyle();

  const location = useLocation();
  const match = useRouteMatch();

  React.useEffect(() => {
    console.log('match', match);
    console.log('location', location);
  }, [location, match]);

  return (
    <>
      {navData.map((item) => {
        return (
          <Button
            key={item.id}
            className={classes.btn}
            component={RouterLink}
            to={item.path}
          >
            {item.title}
          </Button>
        );
      })}
    </>
  );
});
