import convert from 'convert-units';
import {CLOUDY,
  SUN,
  RAIN,
  THUNDER,
  DRIZZLY,
  SNOW} from './../constants/weathers';
const getweatherState = weather => {
  console.log(weather[0]);
  const {id} = weather[0];
  if ( id < 300) {
    return THUNDER;
  } else if (id < 400) {
    return DRIZZLY;
  } else if ( id < 600) {
    return RAIN;
  } else if ( id < 700) {
    return SNOW;
  }else if ( id == 800) {
    return SUN;
  } else {
    return CLOUDY;
  }

}

const getTemperature = temp => {
  return Number(convert(temp).from('K').to('C').toFixed(2));
}

const transformWeather = (weather_data) => {
  const {weather} = weather_data;
  const {humidity, temp} = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getweatherState(weather);
  const temperature = getTemperature(temp);
  const data = {
    temperature,
    weatherState,
    humidity,
    wind: `${speed} m/s`,
  }
  return data;
}

export default transformWeather;
