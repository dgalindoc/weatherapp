import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './style.css';

const locationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = (city) => {
    onSelectedLocation(city);
  };

  const stringToComponent = () => (
    cities.map(city => (
      <WeatherLocation
        key={city}
        city={city}
        cityName={city}
        onWeatherLocationClick={() => handleWeatherLocationClick(city)}
      />
    ))
  );
  return (
    <div className="locationList">
      { stringToComponent(cities)}
    </div>);
};

locationList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectedLocation: PropTypes.func.isRequired,
};
export default locationList;
