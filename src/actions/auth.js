import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { LOG_IN, LOG_OUT } from './actionTypes';
import { handleCreateUser } from './users';

function logIn(id) {
  return {
    type: LOG_IN,
    id,
  };
}

export function handleSetAuthUser(userData) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    // TODO: this check should be done in Firebase, not in Redux
    const { users } = getState();
    const { userID } = userData;
    // check if the user already exists in the store
    const userExists = Object.keys(users).some((key) => key === userID);

    if (userExists) {
      dispatch(logIn(userID));
      dispatch(hideLoading());
    } else {
      dispatch(handleCreateUser(userData));
      dispatch(logIn(userID));
    }
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}
