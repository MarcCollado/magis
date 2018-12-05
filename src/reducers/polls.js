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
        [action.poll.pollID]: action.poll,
      };
    case REGISTER_VOTE:
      return {
        ...state,
        [action.pollID]: {
          ...state[action.pollID],
          votes: {
            ...state[action.pollID].votes,
            ...action.vote,
          },
        },
      };
    default:
      return state;
  }
}
