import { getStore } from 'services/Store';
import { BOARD_PC_SCORE_INCREMENT } from './actionTypes';

export default () => {
  getStore().dispatch({
    type: BOARD_PC_SCORE_INCREMENT
  });
};
