import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { GET_POLLS, CREATE_POLL, REGISTER_VOTE } from './actionTypes';
import { registerVoteToDB, createPollToDB } from '../utils/api';
import { pollFormatter, getAuthUserData } from '../utils/_DATA';

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
    const { authUser, users } = getState();
    const authUserData = getAuthUserData(authUser, users);
    const pollDataRaw = {
      createdBy: authUserData.userID,
      optionOne,
      optionTwo,
    };
    const pollData = pollFormatter(pollDataRaw);
    // create poll @ Redux store
    dispatch(createPoll(pollData));
    // create poll @ Firebase database
    return createPollToDB(pollData)
      .then(() => dispatch(hideLoading()));
  };
}

function registerVote({ pollID, vote }) {
  return {
    type: REGISTER_VOTE,
    pollID,
    vote,
  };
}

export function handleRegisterVote(pollID, vote) {
  return (dispatch) => {
    dispatch(showLoading());
    const voteData = { pollID, vote };
    // register vote @ Redux store
    dispatch(registerVote(voteData));
    // register vote @ Firebase database
    return registerVoteToDB(voteData)
      .then(() => dispatch(hideLoading()));
  };
}
