import {
  GET_QUESTIONS,
  ADD_QUESTION,
  REGISTER_VOTE,
} from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case REGISTER_VOTE:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser]),
          },
        },
      };
    default:
      return state;
  }
}

/*
case TOGGLE_TWEET:
  return {
    ...state,
    [action.id]: {
      ...state[action.id],
      likes: action.hasLiked === true
        ? state[action.id].likes.filter(uid => uid !== action.authUser)
        : state[action.id].likes.concat([action.authUser]),
    },
  };
case ADD_TWEET:
  const { tweet } = action;

  let replyingTo = {};
  if (tweet.replyingTo !== null) {
    replyingTo = {
      [tweet.replyingTo]: {
        ...state[tweet.replyingTo],
        replies: state[tweet.replyingTo].replies.concat([tweet.id]),
      },
    };
  }
*/
