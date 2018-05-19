import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ component: Component, ...rest }) {
  const { authUser } = rest;
  const comesFrom = rest.location.pathname;
  return (
    <Route {...rest} render={(props) => (
      authUser !== null
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: comesFrom }
        }} />
    )} />
  );
}

function mapStateToProps({ authUser }) {
    return {
        authUser,
    };
}

export default connect(mapStateToProps)(PrivateRoute);
