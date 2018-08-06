import React, { Component } from 'react';
import WeatherLocationList from './components/locationList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocationList></WeatherLocationList>
      </div>
    );
  }
}

export default App;
