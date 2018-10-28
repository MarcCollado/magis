import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()])
    .then(data => ({ users: data[0], questions: data[1] }));
}

export function getAuthUsers() {
  return _getUsers();
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}
