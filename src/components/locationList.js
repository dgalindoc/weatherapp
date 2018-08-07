import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const locationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = (city) => {
    console.log(city);
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
    <div>
      { stringToComponent(cities)}
    </div>);
};

locationList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectedLocation: PropTypes.func.isRequired,
};
export default locationList;
