import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import transformWeather from './../../services/transformWeather';

const url = 'http://api.openweathermap.org/data/2.5/weather';
const city = 'Madrid,es';
const appId = 'fee2406037c8c12feeb4f2d00649351a';
const api_weather = `${url}?q=${city}&APPID=${appId}`;

class WeatherLocation extends Component {

  constructor({city}) {
    super();
    this.state = {
      city,
      data: null
    }
  }

  componentWillMount() {
    const { city } = this.state;
    const api_weather = `${url}?q=${city}&APPID=${appId}`;
    fetch(api_weather).then( data => {
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({data});
    });
  }

  componentDidMount() {
  }

  componentWillUpdate = (nextProps, nextState) => {
  }

  componentDidUpdate = (prevProps, prevState) => {
  }

  render = () => {
    const { city, data } = this.state;
    return (
      <div className = "weatherLocationCont">
        <Location city={city}/>
        {data ? <WeatherData data={data}/> : <CircularProgress color="primary" />}

      </div>
    )
  };
}
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
}
export default WeatherLocation;
