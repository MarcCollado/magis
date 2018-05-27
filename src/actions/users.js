import { GET_USERS } from './actionTypes';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
