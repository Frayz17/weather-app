import React from 'react';
import { connect } from 'react-redux';
import { getState } from 'services/Store';
import { citiesListSet } from 'services/Store/reducers/citiesList';
import City from 'components/City';
import { getListOfCities } from 'services/requests';
import Paper from '@material-ui/core/Paper';
import CityListStyle from './style/CityListStyle';

export default connect((state) => {
  return { citiesNumber: state.citiesList.length };
})(function CityList({ citiesNumber }) {
  const classes = CityListStyle();
  const citiesList = getState().citiesList;
  console.log(citiesList);

  React.useEffect(() => {
    (async () => {
      const Cities = await getListOfCities('701822,2172797');
      citiesListSet(Cities);
    })();
  }, []);

  return (
    <Paper className={classes.root} elevation={0}>
      {citiesList.length > 0 &&
        citiesList.map(({ id, name, main: { temp }, wind, weather }) => {
          return (
            <City
              key={id}
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
});
