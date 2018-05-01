import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import questions from './questions';
import users from './users';
import authUser from './auth';

export default combineReducers({
  questions,
  users,
  authUser,
  loadingBar: loadingBarReducer,
});
