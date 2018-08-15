import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocationList from './components/locationList';
import ForecastExtended from './components/forecastExtended';
import './App.css';

const cities = [
  'Madrid,es',
  'Ruidera,es',
  'Daimiel,es',
  'Madrigal de la Vera,es',
  'Ribadeo,es',
];

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { city: null };
  }

  handleSelectedLocation = (city) => {
    this.setState({ city });
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12} className="title">
            <AppBar color="secondary">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={10}>
              <div className="detail">
                {city
                  ? <ForecastExtended city={city} />
                  : (
                    <h2 className="forecastTitle">
                      {'Pulsa en tu ciudad para ampliar la previsión'}
                    </h2>
                  )
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
