import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// relative imports
import { handleInitialData } from './actions/shared';
import Nav from './components/Nav';
import NavTabs from './components/NavTabs';
import Login from './components/Login';
import Leaderboard from './components/Leaderboard';
import AddQuestion from './components/AddQuestion';
import QuestionPage from './components/QuestionPage';
import AddButton from './components/ui-library/AddButton';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  static propTypes = {
    // from connect
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="container">
          <LoadingBar />
          <Nav />
          <Link to="/add"><AddButton /></Link>
          <Switch>
            <Route
              path="/"
              exact
              component={NavTabs}
            />
            <Route
              path="/login"
              exact
              component={Login}
            />
            <PrivateRoute
              path="/leaderboard"
              exact
              component={Leaderboard}
            />
            <PrivateRoute
              path="/add"
              exact
              component={AddQuestion}
            />
            <PrivateRoute
              path="/questions/:id/details"
              exact
              component={QuestionPage}
            />
            <PrivateRoute
              path="/questions/:id"
              exact
              component={QuestionPage}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
