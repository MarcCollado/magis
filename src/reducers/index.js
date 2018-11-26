import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import polls from './polls';
import users from './users';
import authUser from './auth';

export default combineReducers({
  polls,
  users,
  authUser,
  loadingBar: loadingBarReducer,
});
