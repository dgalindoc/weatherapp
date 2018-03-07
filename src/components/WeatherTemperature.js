import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD,SNOW,SUNNY} from './../constants/weathers';

const stateToIconName = (weatherState) => {
  switch (weatherState) {
    case CLOUD:
        return "cloud"
    break;
    case SNOW:
        return "snow"
    break;
    case SUNNY:
        return "day-sunny"
    break;
    default:
      return "day-sunny"
  }
}

const getWeatherIcon = (weatherState) => (
  <WeatherIcons name={stateToIconName(weatherState)} size="2x" />
);

const WeatherTemperature = ({temperature, weatherState}) => (
  <div>
  {getWeatherIcon(weatherState)}

    <span>{`${temperature}ºC`}</span>
  </div>
);

export default WeatherTemperature;
