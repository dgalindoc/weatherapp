import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  WINDY,
  THUNDER,
  DRIZZLY,
  SNOW,
} from '../../../constants/weathers';
import './style.css';

const stateToIconName = (weatherState) => {
  switch (weatherState) {
    case CLOUD:
      return 'cloud';
    case CLOUDY:
      return 'cloudy';
    case SUN:
      return 'day-sunny';
    case RAIN:
      return 'rain';
    case SNOW:
      return 'snow';
    case WINDY:
      return 'windy';
    case THUNDER:
      return 'day-thunderstorm';
    case DRIZZLY:
      return 'day-showers';
    default:
      return 'day-sunny';
  }
};

const getWeatherIcon = weatherState => (
  <WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="4x" />
);

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">
      {`${temperature}`}
    </span>
    <span className="temperatureType">
      ºC
    </span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};
export default WeatherTemperature;
