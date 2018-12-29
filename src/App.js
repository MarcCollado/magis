import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import handleInitialData from './actions/shared';
import CreatePollButton from './components/CreatePollButton';
import CreatePollPage from './components/CreatePollPage';
import FourOFour from './components/FourOFour';
import HomePage from './components/HomePage';
import LeaderPage from './components/LeaderPage';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import PollDetails from './components/PollDetails';
import PrivateRoute from './components/PrivateRoute';

import {
  electricBlue, coralRed, bianchiGreen, plainPurple, seriousYellow, fakeAsbestos,
} from './styles/colors';
import { database } from './utils/firebase';
import { seedPolls, seedUsers } from './utils/helpers';

library.add(faPlus, faUserCircle);

const theme = {
  electricBlue,
  coralRed,
  bianchiGreen,
  plainPurple,
  seriousYellow,
  fakeAsbestos,
  minWidth: '320px',
  maxWidth: '480px',
  boxShadow22: `${fakeAsbestos}22 0em 0.25em 0.25em 0em`,
  boxShadow88: `${fakeAsbestos}88 0em 0.125em 0.25em 0em`,
};

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
        <ThemeProvider theme={theme}>
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
                component={LoginPage}
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
        </ThemeProvider>
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
