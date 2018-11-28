import database from './firebase';

import {
  _getUsers,
  _savePoll,
  _savePollAnswer,
} from './_DATA';


export function getInitialData() {
  // fetch seed data from Firebase
  return database.ref('seed').once('value')
    .then((snapshot) => ({
      users: snapshot.val().users, polls: snapshot.val().polls,
    }));
}

export function getAuthUsers() {
  return _getUsers();
}

export function savePoll(poll) {
  return _savePoll(poll);
}

export function registerVoteToDB({ authedUser, pollId, vote }) {
  return database.ref(`/seed/polls/${pollId}/${vote}/votes/`).once('value')
    // workaround to work with arrays in Firebase
    // 1. get the length of the array
    .then((snapshot) => snapshot.val().length)
    // 2. use the length of the array as the key for the Firebase object
    .then((arrayKey) => {
      const updates = {};
      updates[`/seed/users/${authedUser}/votes/${pollId}`] = vote;
      updates[`/seed/polls/${pollId}/${vote}/votes/${arrayKey}`] = authedUser;
      return database.ref().update(updates);
    });
}
