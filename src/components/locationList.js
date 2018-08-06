import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const stringToComponent = cities => (
  cities.map(city => (<WeatherLocation city={city} cityName={city} />))
);

const locationList = ({ cities }) => (
  <div>
    {stringToComponent(cities)}
  </div>
);

locationList.propTypes = {
  cities: PropTypes.string.isRequired,
};
export default locationList;
