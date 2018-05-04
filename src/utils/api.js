import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
} from './_DATA';

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }));
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}
