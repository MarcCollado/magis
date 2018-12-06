import { database } from './firebase';

export function getInitialData() {
  // fetch seed data from Firebase
  return database.ref().once('value')
    .then((snapshot) => ({
      // TODO: users shouldn't be stored in Redux
      users: snapshot.val().users, polls: snapshot.val().polls,
    }));
}

export function createUserToDB(userData) {
  const { userID } = userData;
  const updates = {};
  updates[`/users/${userID}`] = userData;
  return database.ref().update(updates);
}

export function createPollToDB(pollData) {
  const { pollID } = pollData;
  const updates = {};
  updates[`/polls/${pollID}`] = pollData;
  return database.ref().update(updates);
}

export function registerVoteToDB(voteData) {
  const { pollID, vote } = voteData;
  const updates = {};
  updates[`/polls/${pollID}/votes`] = vote;
  return database.ref().update(updates);
}
