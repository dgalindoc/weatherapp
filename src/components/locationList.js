import React from 'react';
import WeatherLocation from './WeatherLocation';

const locationList = () => (
  <div>
    <WeatherLocation city={'Barcelona,es'} />
    <WeatherLocation city={'Madrid,es'} />
    <WeatherLocation city={'Cordoba,es'} />
  </div>
);

export default locationList;
