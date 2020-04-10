const CURRENT_POSITION_SET = 'CURRENT_POSITION_SET';
const CURRENT_POSITION_UPDATE = 'CURRENT_POSITION_UPDATE';

export default (
  state = {
    lat: null,
    lon: null,
  },
  action
) => {
  switch (action.type) {
    case CURRENT_POSITION_SET:
      return { ...action.payload };

    default:
      return { ...state };
  }
};

export { CURRENT_POSITION_SET, CURRENT_POSITION_UPDATE };

// state = {
//   byCoord: {
//     lat: null,
//     lon: null,
//   },
//   byCity: {},
// },
