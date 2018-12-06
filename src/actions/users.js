import { hideLoading } from 'react-redux-loading-bar';

import { GET_USERS, CREATE_USER } from './actionTypes';
import { createUserToDB } from '../utils/api';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

function createUser(user) {
  return {
    type: CREATE_USER,
    user,
  };
}

export function handleCreateUser(userData) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    // double check there is no authUser already set
    if (authUser === null) {
      dispatch(createUser(userData));
    } else {
      // TODO: better error handling for authUser !== null
      console.error('There is another user already logged in');
      return null;
    }
    // create user to Firebase database
    return createUserToDB(userData)
      .then(() => dispatch(hideLoading()));
  };
}
