import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { handleInitialData } from './actions/shared';
import Nav from './components/Nav';
import QuestionSwitch from './components/QuestionSwitch';
import Leaderboard from './components/Leaderboard';
import AddQuestion from './components/AddQuestion';
import AddButton from './components/ui-library/AddButton';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    // from MapStateToProps
    loading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    return (
      <Router>
        <div className="container">
          <LoadingBar />
          <Nav />
          {loading === true
            ? null
            : <div>
              <Route path="/" exact component={QuestionSwitch} />
              <Route path="/leaderboard" exact component={Leaderboard} />
              <Route path="/add" exact component={AddQuestion} />
            </div>}
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
