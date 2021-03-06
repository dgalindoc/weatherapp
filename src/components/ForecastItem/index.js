import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import WeatherData from '../WeatherLocation/WeatherData';


const ForecastItem = ({ weekDay, hour, data }) => (
  <div>
    <h3 className="titleForecastItem">
      { weekDay }
      {' - '}
      {hour}
      {' hs'}
    </h3>
    <WeatherData data={data} />
  </div>

);

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }).isRequired,
};

export default ForecastItem;
