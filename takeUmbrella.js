function takeUmbrella(weather, chanceOfRain) {
    return (weather === 'rainy') || (weather === 'cloudy' && chanceOfRain > 0.20) || (weather === 'sunny' && chanceOfRain > 0.50);
}
  console.log(takeUmbrella('cloudy', 0.2))