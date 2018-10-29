import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';
// relative imports
import { handleInitialData } from './actions/shared';
import CreatePollButton from './components/CreatePollButton';
import CreatePollPage from './components/CreatePollPage';
import FourOFour from './components/FourOFour';
import HomePage from './components/HomePage';
import LeaderPage from './components/LeaderPage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PollDetails from './components/PollDetails';
import PrivateRoute from './components/PrivateRoute';

library.add(faPlus, faUserCircle);

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Container>
          <LoadingBar />
          <Navbar />
          <Link to="/create"><CreatePollButton /></Link>
          <Switch>
            <Route
              path="/"
              exact
              component={HomePage}
            />
            <Route
              path="/login"
              exact
              component={Login}
            />
            <PrivateRoute
              path="/leaderboard"
              exact
              component={LeaderPage}
            />
            <PrivateRoute
              path="/create"
              exact
              component={CreatePollPage}
            />
            <PrivateRoute
              path="/questions/:id/details"
              exact
              component={PollDetails}
            />
            <Route
              component={FourOFour}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default connect()(App);
