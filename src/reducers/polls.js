import {
  GET_POLLS,
  CREATE_POLL,
  REGISTER_VOTE,
} from '../actions/actionTypes';

export default function polls(state = {}, action) {
  switch (action.type) {
    case GET_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    case CREATE_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll,
      };
    case REGISTER_VOTE:
      return {
        ...state,
        [action.pollId]: {
          ...state[action.pollId],
          [action.vote]: {
            ...state[action.pollId][action.vote],
            votes: [
              ...state[action.pollId][action.vote].votes, action.authedUser],
          },
        },
      };
    default:
      return state;
  }
}
