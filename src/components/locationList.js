import React from 'react';
import WeatherLocation from './WeatherLocation';

const locationList = () => (
  <div>
    <WeatherLocation city={'Vigo,es'} cityName={'Vigo'}/>
    <WeatherLocation city={'Madrid,es'} cityName={'Madrid'}/>
    <WeatherLocation city={'Bilbao,es'} cityName={'Bilbao'}/>
  </div>
);

export default locationList;
