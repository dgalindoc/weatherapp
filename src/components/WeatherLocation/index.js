import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';

const location = 'Madrid,es';
const appId = 'fee2406037c8c12feeb4f2d00649351a';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${appId}`;

const data = {
  temperature: 20,
  weatherState: 'SUNNY',
  humidity: 10,
  wind: '10 m/s',
};

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Madrid',
      data: data
    }
  }

  getweatherState = weather => {
    return "SUNNY";
  }

  getData = (weather_data) => {
    const {humidity, temp} = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getweatherState(this.weather);
    const data = {
      temperature: temp,
      weatherState,
      humidity,
      wind: `${speed} m/s`,
    }
    return data;
    // console.log(data);
  }



  handleUpdateClick = () => {
    fetch(api_weather).then( data => {
      return data.json();
    }).then(weather_data => {
      const data = this.getData(weather_data);
      this.setState({data});
    });

  }


  render = () => {
    const { city, data } = this.state;
    return (
      <div className = "weatherLocationCont">
        <Location city={city}/>
        <WeatherData data={data}/>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    )
  };
}

export default WeatherLocation;
