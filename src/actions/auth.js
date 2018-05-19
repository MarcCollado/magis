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
        const auth = Object.keys(users)
          .filter((user) => user === id)
        auth.length === 0 ?
          dispatch(setAuthUser(null)) :
          dispatch(setAuthUser(id))
      })
      .then(() => dispatch(hideLoading()));
  };
}
