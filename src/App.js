import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';
import QuestionSwitch from './components/QuestionSwitch';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <QuestionSwitch />
        </div>
      </Router>
    );
  }
}

export default App;
