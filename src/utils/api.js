import { database } from './firebase';
import { _getUsers } from './_DATA';

export function getInitialData() {
  // fetch seed data from Firebase
  return database.ref('seed').once('value')
    .then((snapshot) => ({
      users: snapshot.val().users, polls: snapshot.val().polls,
    }));
}

export function getAuthUsers() {
  return database.ref('seed').once('value')
    .then((snapshot) => ({
      users: snapshot.val().users,
    }));
}

export function createUserToDB(userData) {
  const { userID } = userData;
  const updates = {};
  updates[`/seed/users/${userID}`] = userData;
  return database.ref().update(updates);
}

export function createPollToDB(pollData) {
  const { pollID } = pollData;
  const updates = {};
  updates[`/seed/polls/${pollID}`] = pollData;
  return database.ref().update(updates);
}

export function registerVoteToDB(voteData) {
  const { pollID, vote } = voteData;
  const updates = {};
  updates[`/seed/polls/${pollID}/votes`] = vote;
  return database.ref().update(updates);
}
