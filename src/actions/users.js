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
    if (authUser === null) {
      dispatch(createUser(userData));
    } else {
      // TODO: better error handling for authUser !== null
      console.error('Can\'t create a new user if another user is already logged in');
      return null;
    }
    // create user to Firebase database
    return createUserToDB(userData)
      .then(() => dispatch(hideLoading()));
  };
}
