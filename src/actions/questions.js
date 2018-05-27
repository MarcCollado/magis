import { showLoading, hideLoading } from 'react-redux-loading-bar';
// relative imports
import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { GET_QUESTIONS, ADD_QUESTION, REGISTER_VOTE } from './actionTypes';

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
      .then(() => dispatch(hideLoading()));
  };
}
