import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { handleInitialData } from './actions/shared';
import Nav from './components/Nav';
import NavTabs from './components/NavTabs';
import Leaderboard from './components/Leaderboard';
import AddQuestion from './components/AddQuestion';
import QuestionPage from './components/QuestionPage';
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
          <Link to="/add"><AddButton /></Link>

          {loading === true
            ? null
            : <div>
              <Switch>
                <Route path="/leaderboard" exact component={Leaderboard} />
                <Route path="/add" exact component={AddQuestion} />
                <Route path="/questions/:id/details" exact component={QuestionPage} />
                <Route path="/questions/:id" exact component={QuestionPage} />
                <Route path="/" exact component={NavTabs} />
              </Switch>
            </div>}
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
