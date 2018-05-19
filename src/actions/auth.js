import { showLoading, hideLoading } from 'react-redux-loading-bar';
// relative imports
import { getAuthUsers } from '../utils/api';

export const SET_AUTH_USER = 'SET_AUTH_USER';

export function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id,
  };
}

export function handleSetAuthUser(id) {
  return (dispatch) => {
    dispatch(showLoading());

    return getAuthUsers()
      .then(users => {
        Object.keys(users)
          .filter((user) => users[user].id === id) ?
          dispatch(setAuthUser(id)) :
          dispatch(setAuthUser(null))
      })
      .then(() => dispatch(hideLoading()));
  };
}
