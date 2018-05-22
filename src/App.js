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
import PrivateRoute from './components/PrivateRoute';
import FourOFour from './components/FourOFour';
import AddButton from './components/ui-library/AddButton';

class App extends Component {
  static propTypes = {
    // from connect
    dispatch: PropTypes.func.isRequired,
    // from MapStateToProps
    questionsIDs: PropTypes.array.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
      // const { questionsIDs } = this.props;
      // const url = window.location.href.toString();
      // if (url.includes('/questions/')) {
      //   const invalidUrl = questionsIDs.filter(id => url.includes('id'));
      //   if (invalidUrl) {
      //     return (
      //       <Router>
      //         <div className="container">
      //           <LoadingBar />
      //           <Nav />
      //           <Link to="/add"><AddButton /></Link>
      //           <Route
      //             component={FourOFour}
      //           />
      //         </div>
      //       </Router>
      //     )
      //   }
      //   return;
      // }
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
          <Route
            component={FourOFour}
          />
        </Switch>
      </div>
    </Router>
    );
  }
}

function mapStateToProps({ questions }, { match }) {
  const questionsIDs = Object.keys(questions);
  return {
    questionsIDs,
  };
}

export default connect(mapStateToProps)(App);
