import { getStore } from 'services/Store';
import { BOARD_FIELD_COUNTER_INCREMENT } from './actionTypes';

export default () => {
  getStore().dispatch({
    type: BOARD_FIELD_COUNTER_INCREMENT
  });
};
