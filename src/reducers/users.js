import { GET_USERS, CREATE_USER, REGISTER_VOTE } from '../actions/actionTypes';

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
    case REGISTER_VOTE:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          votes: {
            ...state[action.authedUser].votes,
            [action.pollId]: action.vote,
          },
        },
      };
    default:
      return state;
  }
}
