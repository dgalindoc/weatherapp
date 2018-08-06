import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD,SNOW,SUNNY} from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './style.css';

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
  <div className='weatherTemperatureCont'>
  {getWeatherIcon(weatherState)}

    <span>{`${temperature}ºC`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string,
}
export default WeatherTemperature;
