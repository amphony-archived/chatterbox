import {
  REGISTER_USER,
  LOGIN_USER,
  GET_USER,
  SEARCH_USERS,
  USER_ERROR,
  SET_LOADING
} from './types';

// Register User
export const registerUser = user => async dispatch => {
  setLoading();

  const { username } = user;

  const res = await fetch('http://localhost:5000/users', {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(user)
  });

  const data = await res.json();
  console.log(data);
  window.localStorage.setItem('jwt-token', data.token);

  dispatch({
    type: REGISTER_USER,
    payload: username
  });
};

// Login User
export const loginUser = (username, password) => async dispatch => {
  try {
    const res = await fetch('http://localhost:5000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ username, password})
    });

    const data = await res.json();
    console.log(data);
    window.localStorage.setItem('jwt-token', data.token);

    dispatch({
      type: REGISTER_USER,
      payload: username
    });
  } catch (err) {
    console.error(err);
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
};