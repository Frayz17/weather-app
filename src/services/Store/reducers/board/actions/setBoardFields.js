import { getStore } from 'services/Store';
import { SET_BOARD_FIELDS } from './actionTypes';

export default (payload) => {
  getStore().dispatch({
    type: SET_BOARD_FIELDS,
    payload
  });
};
