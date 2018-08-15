import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';
import './style.css';

const url = 'http://api.openweathermap.org/data/2.5/forecast';
const appId = 'fee2406037c8c12feeb4f2d00649351a';

class forecastExtended extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { forecastData: null };
  }

  componentDidMount() {
    const { city } = this.props;
    this.updateCity(city);
  }

  componentWillReceiveProps(nextProps) {
    const { city } = this.props;
    if (nextProps.city !== city) {
      this.updateCity(nextProps.city);
    }
  }

  updateCity = (city) => {
    const urlForecast = `${url}?q=${city}&APPID=${appId}`;
    fetch(urlForecast).then(data => data.json()).then((weatherData) => {
      const forecastData = transformForecast(weatherData);
      this.setState({ forecastData });
    });
  }

  renderForecastItemDay = forecastData => forecastData.map(forecast => (
    <ForecastItem
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}
    />
  ))

  renderProgress = () => (
    <h3>
      {'Cargando Pronóstico Extendido...'}
    </h3>
  )

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div className="forecastContainer">
        <h2 className="forecastTitle">
          {'Info '}
          {city}
        </h2>
        {forecastData
          ? this.renderForecastItemDay(forecastData)
          : this.renderProgress()}
      </div>);
  }
}

forecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};
export default forecastExtended;
