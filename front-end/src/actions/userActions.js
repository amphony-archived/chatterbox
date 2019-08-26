import {
  SET_USER,
  GET_USER,
  SEARCH_USERS,
  USER_ERROR,
  SET_LOADING
} from './types';

// Get User => helper
const getUserHelper = async () => {
  setLoading();
  const token = await window.localStorage.getItem('jwt-token');
  
  if (token) {
    const res = await fetch('http://localhost:5000/auth', {
      method: 'get',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-auth-token': token
      }
    });

    const data = await res.json();
    return data;
  }
}
// Get User => dispatch
export const getUser = () => async dispatch => {
  // dispatch({
  //   type: SET_USER,
  //   payload: data.user
  // });
}

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
  window.localStorage.setItem('jwt-token', data.token);
};

// Login User
export const loginUser = (username, password) => async dispatch => {
  console.log('log in user');
  try {
    console.log('try');
    const res = await fetch('http://localhost:5000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ username, password})
    });

    console.log('req finished');

    if (res.status === 200) {
      const data = await res.json();
      await window.localStorage.setItem('jwt-token', data.token);
      const user = await getUserHelper();
      dispatch({
        type: SET_USER,
        payload: user.user
      });
    }
  } catch (err) {
    console.error(err);
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
};