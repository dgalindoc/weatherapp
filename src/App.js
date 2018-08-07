import React from 'react';
import WeatherLocationList from './components/locationList';
import './App.css';

const cities = [
  'Vigo,es',
  'Barcelona,es',
  'Madrid,es',
  'Roma,it',
];

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleSelectedLocation = (city) => {
    console.log(`hendleSelectedLocation ${city}`);
  }

  render() {
    return (
      <div className="App">
        <WeatherLocationList
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    );
  }
}

export default App;
