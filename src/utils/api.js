import {
  _getUsers,
  _getPolls,
  _savePoll,
  _savePollAnswer,
} from './_DATA';

export function getInitialData() {
  return Promise.all([_getUsers(), _getPolls()])
    .then((data) => ({ users: data[0], polls: data[1] }));
}

export function getAuthUsers() {
  return _getUsers();
}

export function savePoll(poll) {
  return _savePoll(poll);
}

export function savePollAnswer({ authedUser, pollId, vote }) {
  return _savePollAnswer({ authedUser, pollId, vote });
}
