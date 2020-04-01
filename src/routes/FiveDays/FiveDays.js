import React from 'react';
import ForecastList from 'components/ForecastList';

export default () => {
  const range = {
    start: 0,
    end: 40
  };

  console.log(range);

  return (
    <>
      <ForecastList range={range} />
    </>
  );
};
