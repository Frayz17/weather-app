import React from 'react';
import CurrentWeather from 'components/CurrentWeather';
import CityList from 'components/CityList';

export default () => {
  return (
    <>
      <CurrentWeather windInfoFlag={true} />
      <CityList />
    </>
  );
};
