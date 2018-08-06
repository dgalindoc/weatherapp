import convert from 'convert-units';
import {
  CLOUDY,
  SUN,
  RAIN,
  THUNDER,
  DRIZZLY,
  SNOW,
} from '../constants/weathers';

const getweatherState = (weather) => {
  let weatherIcon = '';
  const { id } = weather[0];
  if (id < 300) {
    weatherIcon = THUNDER;
  } else if (id < 400) {
    weatherIcon = DRIZZLY;
  } else if (id < 600) {
    weatherIcon = RAIN;
  } else if (id < 700) {
    weatherIcon = SNOW;
  } else if (id === 800) {
    weatherIcon = SUN;
  } else {
    weatherIcon = CLOUDY;
  }
  return weatherIcon;
};

const getTemperature = temp => Number(convert(temp).from('K').to('C').toFixed(1));

const transformWeather = (weatherData) => {
  const { weather } = weatherData;
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = getweatherState(weather);
  const temperature = getTemperature(temp);
  const data = {
    temperature,
    weatherState,
    humidity,
    wind: `${speed} m/s`,
  };
  return data;
};

export default transformWeather;
