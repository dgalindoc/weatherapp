import React from 'react';
import PropTypes from 'prop-types';

class forecastExtended extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { city } = this.props;
    return (
      <div>
        Info
        {city}
      </div>);
  }
}

forecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};
export default forecastExtended;
