import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Question extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  render() {
    return (
      <p>{this.props.id}</p>
    );
  }
}

export default connect()(Question);
