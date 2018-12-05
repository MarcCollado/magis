import { GET_USERS, CREATE_USER } from '../actions/actionTypes';

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case CREATE_USER:
      return {
        ...state,
        [action.user.userID]: action.user,
      };
    default:
      return state;
  }
}
