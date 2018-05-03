import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { handleInitialData } from './actions/shared';
import Nav from './components/Nav';
import QuestionSwitch from './components/QuestionSwitch';
import AddButton from './components/AddButton';
import AddQuestion from './components/AddQuestion';
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
        <div className="container">
          <LoadingBar />
          <Nav />
          {this.props.loading === true
            ? null
            : <div>
              <Route path="/" exact component={QuestionSwitch} />
              {/* <Route path="/questions/:question_id" exact component={QuestionPage} />*/}
            </div>}
          <Route path="/add" exact component={AddQuestion} />
          <Link
            to="/add"
            className="add-question"
          >
            <AddButton />
          </Link>
        </div>
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
