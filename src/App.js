import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// relative imports
import { handleInitialData } from './actions/shared';
import AddQuestion from './components/AddQuestion';
import FourOFour from './components/FourOFour';
import HomePage from './components/HomePage';
import LeaderPage from './components/LeaderPage';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import QuestionPage from './components/QuestionPage';
import AddButton from './components/ui-library/AddButton';

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
        <Container>
          <LoadingBar />
          <Navbar />
          <Link to="/add"><AddButton /></Link>
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
