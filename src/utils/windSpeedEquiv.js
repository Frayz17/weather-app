import roundNumber from './roundNumber';

export default (windSpeed) => {
  const speed = roundNumber(windSpeed);

  switch (true) {
    case speed >= 0 && speed <= 0.2:
      return 'Calm';
    case speed >= 0.3 && speed <= 1.5:
      return 'Light air';
    case speed >= 1.6 && speed <= 3.3:
      return 'Light breeze';
    case speed >= 3.4 && speed <= 5.6:
      return 'Gengtle breeze';
    case speed >= 5.5 && speed <= 7.9:
      return 'Moderate breeze';
    case speed >= 8.0 && speed <= 10.7:
      return 'Fresh breeze';
    case speed >= 10.8 && speed <= 13.8:
      return 'Strong breeze';
    case speed >= 13.9 && speed <= 17.1:
      return 'Near gale';
    case speed >= 17.2 && speed <= 20.7:
      return 'Gale';
    case speed >= 20.8 && speed <= 24.4:
      return 'Strong gale';
    case speed >= 24.5 && speed <= 28.4:
      return 'Storm';
    case speed >= 28.5 && speed <= 32.6:
      return 'Violent storm';
    case speed >= 32.7:
      return 'Hurricane';

    default:
      return 'cannot perform data for wind speed';
  }
};
