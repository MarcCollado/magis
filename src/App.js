import React, { Component, Fragment } from 'react';
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
    loading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <LoadingBar />
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                <Route path="/" exact component={QuestionSwitch} />
                {/* <Route path="/questions/:question_id" exact component={QuestionPage} />
                <Route path="/add" exact component={NewQuestion} /> */}
              </div>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null,
  };
}

export default connect(mapStateToProps)(App);
