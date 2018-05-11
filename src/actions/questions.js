import { showLoading, hideLoading } from 'react-redux-loading-bar';
// relative imports
import { saveQuestion, saveQuestionAnswer} from '../utils/api';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const REGISTER_VOTE = 'REGISTER_VOTE';

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

function registerVote({ authedUser, qid, answer }) {
  return {
    type: REGISTER_VOTE,
    authedUser,
    qid,
    answer,
  };
}

export function handleRegisterVote(info) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    const questionPayload = {
      authedUser: authUser,
      qid: info.id,
      answer: info.option,
    };
    dispatch(showLoading());
    dispatch(registerVote(questionPayload));
    return saveQuestionAnswer(questionPayload)
      // .then(question => dispatch(registerVote(question, authUser)))
      .then(() => dispatch(hideLoading()));
  };
}

/*
Option w/ fallback
export function handleRegisterVote(info) {
  return (dispatch) => {
    dispatch(registerVote(info));

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleRegisterVote: ', e);
        dispatch(registerVote(info));
        alert('There was an error saving your vote. Try again.');
      });
  };
}
*/
