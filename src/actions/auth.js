import { showLoading, hideLoading } from 'react-redux-loading-bar';
// relative imports
import { getAuthUsers } from '../utils/api';
import { LOG_IN, LOG_OUT } from './actionTypes';

export function logIn(id) {
  return {
    type: LOG_IN,
    id,
  };
}

export function handleSetAuthUser(id) {
  return (dispatch) => {
    dispatch(showLoading());

    return getAuthUsers()
      .then((users) => {
        const auth = Object.keys(users).filter(user => user === id);
        auth.length === 0 ?
          dispatch(logIn(null)) :
          dispatch(logIn(id));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}
