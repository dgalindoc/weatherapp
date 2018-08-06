import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUNNY} from './../../constants/weathers';
import './style.css';

const data = {
  temperature: 20,
  weatherState: 'SUNNY',
  humidity: 10,
  wind: '10 m/s',
};

class WeatherLocation extends Component {
  render = () => (
    <div class="weatherLocationCont">
      <Location city={'Madrid'}/>
      <WeatherData data={data}/>
    </div>
  );
}

export default WeatherLocation;
