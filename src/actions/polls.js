import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { GET_POLLS, CREATE_POLL, REGISTER_VOTE } from './actionTypes';
import { registerVoteToDB, createPollToDB } from '../utils/api';
import { formatPoll } from '../utils/_DATA';

export function getPolls(polls) {
  return {
    type: GET_POLLS,
    polls,
  };
}

function createPoll(poll) {
  return {
    type: CREATE_POLL,
    poll,
  };
}

export function handleCreatePoll(optionOne, optionTwo) {
  return (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    const pollRawData = {
      author: authUser,
      optionOne,
      optionTwo,
    };
    const pollCleanData = formatPoll(pollRawData);

    dispatch(createPoll(pollCleanData));

    // create poll to Firebase database
    return createPollToDB(pollCleanData)
      .then(() => dispatch(hideLoading()));
  };
}

function registerVote({ authedUser, pollId, vote }) {
  return {
    type: REGISTER_VOTE,
    authedUser,
    pollId,
    vote,
  };
}

export function handleRegisterVote(userVote) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    const pollData = {
      authedUser: authUser,
      pollId: userVote.id,
      vote: userVote.option,
    };
    dispatch(showLoading());
    dispatch(registerVote(pollData));

    // save vote to Firebase database
    return registerVoteToDB(pollData)
      .then(() => dispatch(hideLoading()));
  };
}
