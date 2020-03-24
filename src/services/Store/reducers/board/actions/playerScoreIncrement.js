import { getStore } from 'services/Store';
import { BOARD_PLAYER_SCORE_INCREMENT } from './actionTypes';

export default () => {
  getStore().dispatch({
    type: BOARD_PLAYER_SCORE_INCREMENT
  });
};
