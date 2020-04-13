const CURRENT_CITY_SET = 'CURRENT_CITY_SET';

export default (
  state = {
    cityName: null,
  },
  action
) => {
  switch (action.type) {
    case CURRENT_CITY_SET:
      return { cityName: action.payload };

    default:
      return { ...state };
  }
};

export { CURRENT_CITY_SET };
