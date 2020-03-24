import {
  SET_BOARD_FIELDS,
  BOARD_FIELD_COUNTER_INCREMENT,
  BOARD_PLAYER_SCORE_INCREMENT,
  BOARD_PC_SCORE_INCREMENT,
  BOARD_RESET
} from './actions/actionTypes';

export default (
  state = {
    fields: [],
    fieldCounter: 0,
    playerScore: 0,
    pcScore: 0
  },
  action
) => {
  switch (action.type) {
    case SET_BOARD_FIELDS:
      return { ...state, fields: action.payload };
    case BOARD_FIELD_COUNTER_INCREMENT:
      return { ...state, fieldCounter: state.fieldCounter + 1 };
    case BOARD_PLAYER_SCORE_INCREMENT:
      return { ...state, playerScore: state.playerScore + 1 };
    case BOARD_PC_SCORE_INCREMENT:
      return { ...state, pcScore: state.pcScore + 1 };
    case BOARD_RESET:
      return { fields: [], fieldCounter: 0, playerScore: 0, pcScore: 0 };
    default:
      return { ...state };
  }
};
