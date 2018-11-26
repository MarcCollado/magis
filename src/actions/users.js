import { GET_USERS } from './actionTypes';

export default function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
