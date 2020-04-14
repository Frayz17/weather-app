import React from 'react';
import { setCurrentLocationDisplayMode } from 'services/Store/reducers/currentLocation';
import Button from '@material-ui/core/Button';
import displayModeTogglerStyle from './style/displayModeTogglerStyle';

export default React.memo(
  ({ displayMode, didWeatherByPositionLoad, didWeatherByCityLoad }) => {
    const classes = displayModeTogglerStyle();

    const displayModeTuggler =
      displayMode === 'city'
        ? 'position'
        : displayMode === 'position'
        ? 'city'
        : 'city';

    return (
      <Button
        size={'small'}
        className={classes.btn}
        onClick={() => setCurrentLocationDisplayMode(displayModeTuggler)}
        disabled={
          (displayMode === 'city' && !didWeatherByPositionLoad) ||
          (displayMode === 'position' && !didWeatherByCityLoad)
        }
      >
        {displayMode === 'city' ? 'by coords' : 'by city'}
      </Button>
    );
  }
);
