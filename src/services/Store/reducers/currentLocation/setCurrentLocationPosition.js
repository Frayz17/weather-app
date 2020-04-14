import { getStore } from 'services/Store';
import { CURRENT_LOCATION_POSITION_SET } from './currentLocation';

export default async () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    const position = {
      lat: crd.latitude,
      lon: crd.longitude,
    };

    handlerSetPosition(position);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  await navigator.geolocation.getCurrentPosition(success, error, options);
};

function handlerSetPosition(payload) {
  getStore().dispatch({
    type: CURRENT_LOCATION_POSITION_SET,
    payload,
  });
}
