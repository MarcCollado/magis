import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { getInitialData } from '../utils/api';
import { getQuestions } from './questions';
import { getUsers } from './users';
import { setAuthUser } from './auth';

const FAKE_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getQuestions(questions));
        dispatch(getUsers(users));
        dispatch(setAuthUser(FAKE_ID));
        dispatch(hideLoading());
      });
  };
}
