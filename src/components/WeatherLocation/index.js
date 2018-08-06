import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import transformWeather from './../../services/transformWeather';

const location = 'Madrid,es';
const appId = 'fee2406037c8c12feeb4f2d00649351a';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${appId}`;

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Madrid'
    }
  }

  handleUpdateClick = () => {
    fetch(api_weather).then( data => {
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({data});
    });

  }

  componentWillMount() {
    this.handleUpdateClick();
  }

  componentDidMount() {
  }

  componentWillUpdate = (nextProps, nextState) => {
  }

  componentDidUpdate = (prevProps, prevState) => {
  }

  render = () => {
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className = "weatherLocationCont">
        <Location city={city}/>
        {data ? <WeatherData data={data}/> : <CircularProgress color="primary" />}

      </div>
    )
  };
}

export default WeatherLocation;
