import { getStore } from 'services/Store';
import { BOARD_RESET } from './actionTypes';

export default () => {
  getStore().dispatch({
    type: BOARD_RESET
  });
};
