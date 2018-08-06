import React, { Component } from 'react';
import { mainTheme } from './style';
import PropTypes from 'prop-types';

class Homepage extends Component {
  render() {
    const { style } = this.props;
    return (
      <div
        style={{ backgroundColor: mainTheme[style].background, height: '100%' }}
      >
        <span style={{ color: mainTheme[style].text }}>
          Welcome to my homepage
        </span>
      </div>
    );
  }
}

Homepage.propTypes = {
  style: PropTypes.string
};

export default Homepage;
