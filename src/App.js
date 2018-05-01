import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { handleInitialData } from './actions/shared';
import Nav from './components/Nav';
import QuestionSwitch from './components/QuestionSwitch';
import './App.css';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="container">
          <LoadingBar />
          <Nav />
          <QuestionSwitch />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
