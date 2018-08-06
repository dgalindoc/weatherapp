import React from 'react';
import WeatherLocationList from './components/locationList';
import './App.css';

const cities = [
  'Vigo,es',
  'Barcelona,es',
  'Madrid,es',
  'Vigo,es',
  'Roma,it',
];

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <WeatherLocationList cities={cities} />
      </div>
    );
  }
}

export default App;
