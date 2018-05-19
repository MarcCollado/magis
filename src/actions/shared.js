import { showLoading, hideLoading } from 'react-redux-loading-bar';
// relative imports
import { getInitialData } from '../utils/api';
import { getQuestions } from './questions';
import { getUsers } from './users';
import { setAuthUser } from './auth';

const NO_AUTH_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getQuestions(questions));
        dispatch(getUsers(users));
        dispatch(setAuthUser(NO_AUTH_ID));
        dispatch(hideLoading());
      });
  };
}
