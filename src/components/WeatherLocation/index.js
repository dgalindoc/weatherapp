import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';

const WeatherLocation = () => (
  <div class="weatherLocationCont">
    <Location city={'Madrid'}/>
    <WeatherData/>
  </div>
);

export default WeatherLocation;
