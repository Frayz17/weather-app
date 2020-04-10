import React from 'react';
import Box from '@material-ui/core/Box';
import mapStyle from './style/mapStyle';
import ReactMapboxGl from 'react-mapbox-gl';
// { Layer, Feature }

export default function Map({ coord }) {
  const classes = mapStyle();

  const mapOptions = {
    street: 'mapbox://styles/mapbox/streets-v11',
  };

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZnJheXoiLCJhIjoiY2s4cHc0cDY3MWF3aTNvbzJzY3U2eW42dCJ9.rQQ9QhEc_fgtQYdI2jkNPQ',
  });

  return (
    <Box className={classes.root}>
      <Map
        style={mapOptions.street}
        containerStyle={{
          height: '50vh',
          width: '100%',
        }}
        center={[coord.lon, coord.lat]}
      >
        {/* <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[coord.lon, coord.lat]} />
        </Layer> */}
      </Map>
    </Box>
  );
}
