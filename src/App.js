import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import handleInitialData from './actions/shared';
import CreatePollButton from './components/CreatePollButton';
import CreatePollPage from './components/CreatePollPage';
import FourOFour from './components/FourOFour';
import HomePage from './components/HomePage';
import LeaderPage from './components/LeaderPage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PollDetails from './components/PollDetails';
import PrivateRoute from './components/PrivateRoute';

import { database } from './utils/firebase';
import { seedPolls, seedUsers } from './utils/helpers';

library.add(faPlus, faUserCircle);

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  componentWillUnmount() {
    database.ref().off();
  }

  seedFirebase = () => {
    seedPolls().then((polls) => {
      seedUsers().then((users) => {
        const seed = { polls, users };
        database.ref().set(seed);
      });
    });
  }

  render() {
    return (
      <Router>
        <Container>
          <LoadingBar />
          <Navbar />
          {/* <button onClick={this.seedFirebase}>Reset Firebase</button> */}
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
              path="/polls/:id/details"
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

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
