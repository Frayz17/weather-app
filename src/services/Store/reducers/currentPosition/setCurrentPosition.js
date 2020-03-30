import { getStore } from 'services/Store';
import { CURRENT_POSITION_SET } from './currentPosition';

export default async () => {
  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    const crd = pos.coords;

    const position = {
      lat: crd.latitude,
      lon: crd.longitude
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
    type: CURRENT_POSITION_SET,
    payload
  });
}
