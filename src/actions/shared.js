import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { getPolls } from './polls';
import { getUsers } from './users';
import { getInitialData } from '../utils/api';

// TODO: this method has to get the data from Firebase
export default function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, polls }) => {
        dispatch(getPolls(polls));
        dispatch(getUsers(users));
        dispatch(hideLoading());
      });
  };
}
