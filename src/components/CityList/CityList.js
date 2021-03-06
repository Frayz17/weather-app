import React from 'react';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import {
  setCitiesListForecasts,
  setCitiesListIds,
} from 'services/Store/reducers/citiesList';
import City from 'components/City';
import getListOfCities from 'services/requests/getListOfCities';
import Paper from '@material-ui/core/Paper';
import CityListStyle from './style/CityListStyle';

export default connect((state) => {
  return {
    citiesNumber: state.citiesList.forecastsList.length,
    citiesIDsList: state.citiesList.IDsList,
  };
})(
  React.memo(function CityList({ citiesNumber, citiesIDsList }) {
    const classes = CityListStyle();
    const citiesList = getState().citiesList.forecastsList;

    React.useEffect(() => {
      const myStorage = window.localStorage;
      let citiesIDsLocalStorage = myStorage.getItem('citiesIDList');

      setCitiesListIds(citiesIDsLocalStorage);
    }, []);

    React.useEffect(() => {
      if (citiesIDsList !== '') {
        (async () => {
          console.log('CitiesList______USEEFFECT ASYNC');
          const Cities = await getListOfCities(citiesIDsList);
          setCitiesListForecasts(Cities);
        })();
      }
    }, [citiesIDsList]);

    return (
      <Paper className={classes.root} elevation={0}>
        {citiesList.length > 0 &&
          citiesList.map(({ id, name, main: { temp }, wind, weather }) => {
            return (
              <City
                key={id}
                id={id}
                name={name}
                temp={temp}
                windSpeed={wind.speed}
                weather={weather[0].main}
                weatherIcon={weather[0].icon}
              />
            );
          })}
      </Paper>
    );
  })
);
