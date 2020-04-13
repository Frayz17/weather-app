import sliceForecastByDays from './sliceForecastByDays';

const WEATHER_FIVE_DAYS_SET_BY_POSITION = 'WEATHER_FIVE_DAYS_SET_BY_POSITION';
const WEATHER_FIVE_DAYS_SET_BY_CITY = 'WEATHER_FIVE_DAYS_SET_BY_CITY';

export default (
  state = {
    byPosition: {},
    byCity: {},
  },
  action
) => {
  switch (action.type) {
    case WEATHER_FIVE_DAYS_SET_BY_POSITION:
      const listByDaysPosition = sliceForecastByDays(action.payload.list);
      return {
        ...state,
        byPosition: { listByDays: listByDaysPosition, ...action.payload },
      };
    case WEATHER_FIVE_DAYS_SET_BY_CITY:
      const listByDaysCity = sliceForecastByDays(action.payload.list);
      return {
        ...state,
        byCity: { listByDays: listByDaysCity, ...action.payload },
      };

    default:
      return { ...state };
  }
};

export { WEATHER_FIVE_DAYS_SET_BY_POSITION, WEATHER_FIVE_DAYS_SET_BY_CITY };
