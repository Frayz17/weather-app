export default (windSpeed) => {
  switch (true) {
    case windSpeed >= 0 && windSpeed <= 0.2:
      return 'Calm';
    case windSpeed >= 0.3 && windSpeed <= 1.5:
      return 'Light air';
    case windSpeed >= 1.6 && windSpeed <= 3.3:
      return 'Light breeze';
    case windSpeed >= 3.4 && windSpeed <= 5.6:
      return 'Gengtle breeze';
    case windSpeed >= 5.5 && windSpeed <= 7.9:
      return 'Moderate breeze';
    case windSpeed >= 8.0 && windSpeed <= 10.7:
      return 'Fresh breeze';
    case windSpeed >= 10.8 && windSpeed <= 13.8:
      return 'Strong breeze';
    case windSpeed >= 13.9 && windSpeed <= 17.1:
      return 'Near gale';
    case windSpeed >= 17.2 && windSpeed <= 20.7:
      return 'Gale';
    case windSpeed >= 20.8 && windSpeed <= 24.4:
      return 'Strong gale';
    case windSpeed >= 24.5 && windSpeed <= 28.4:
      return 'Storm';
    case windSpeed >= 28.5 && windSpeed <= 32.6:
      return 'Violent storm';
    case windSpeed >= 32.7:
      return 'Hurricane';

    default:
      return 'cannot perform data for wind speed';
  }
};
