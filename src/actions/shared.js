import { showLoading, hideLoading } from 'react-redux-loading-bar';
// relative imports
import { getInitialData } from '../utils/api';
import { getQuestions } from './questions';
import { getUsers } from './users';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getQuestions(questions));
        dispatch(getUsers(users));
        dispatch(hideLoading());
      });
  };
}
