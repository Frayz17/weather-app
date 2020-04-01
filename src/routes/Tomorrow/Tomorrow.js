import React from 'react';
import ForecastList from 'components/ForecastList';

export default function Today() {
  const range = {
    start: 8,
    end: 15
  };
  return (
    <>
      <ForecastList range={range} />
    </>
  );
}
