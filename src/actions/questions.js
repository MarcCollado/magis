import { showLoading, hideLoading } from 'react-redux-loading-bar';
// relative imports
import { saveQuestion, saveQuestionAnswer} from '../utils/api';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      author: authUser,
      optionOneText,
      optionTwoText,
    })
      .then(question => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

function answerQuestion(question, authUser) {
  return {
    type: ANSWER_QUESTION,
    question,
    authUser
  };
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswer({
      authedUser: authUser,
      qid,
      answer,
    })
      .then(question => dispatch(answerQuestion(question, authUser)))
      .then(() => dispatch(hideLoading()));
  };
}
