import {
  GET_USERS,
 } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
      case 'REGISTER_VOTE':
        console.log('TEST')
        return (state);
    default:
      return state;
  }
}
