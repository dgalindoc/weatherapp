import convert from 'convert-units';
const getweatherState = weather => {
  return "SUNNY";
}

const getTemperature = temp => {
  return Number(convert(temp).from('K').to('C').toFixed(2));
}

const transformWeather = (weather_data) => {
  const {humidity, temp} = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getweatherState(this.weather);
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
