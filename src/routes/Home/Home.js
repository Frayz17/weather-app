import React from 'react';
import Forecast from 'components/Forecast';
import CityList from 'components/CityList';
// import getCurrentPosition from 'utils/getCurrentPosition';

export default function Home() {
  return (
    <>
      <Forecast />
      <CityList />
    </>
  );
}
