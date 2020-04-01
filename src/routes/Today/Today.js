import React from 'react';
import ForecastList from 'components/ForecastList';

export default function Today() {
  const range = {
    start: 0,
    end: 7
  };

  return (
    <>
      <ForecastList range={range} />
    </>
  );
}
