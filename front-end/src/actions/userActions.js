import {
  REGISTER_USER,
  LOGIN_USER,
  GET_USER,
  SEARCH_USERS,
  USER_ERROR,
  SET_LOADING
} from './types';

// Register User
export const registerUser = (username, password) => async dispatch => {
  setLoading();

  const res = await fetch('http://localhost:5000/users', {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ username, password })
  });

  dispatch({
    type: REGISTER_USER,
    payload: username
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
};