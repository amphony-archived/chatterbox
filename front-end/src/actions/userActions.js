import {
  SET_USER,
  SET_USERS,
  SET_CONTACTS,
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

    const data = await res.json()
    dispatch({
      type: SET_USER,
      payload: data.user
    });
  }
}

// Get users
export const getUsers = query => async dispatch => {
  try {
    const token = await window.localStorage.getItem('jwt-token');
    const res = await fetch(`http://localhost:5000/users/?username=${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-auth-token': token
      }
    });

    if (res.status === 200) {
      const data = await res.json();
      dispatch({
        type: SET_USERS,
        payload: data.users
      });
    }
  } catch (err) {
    console.error(err);
  }
}

// Clear users
export const clearUsers = () => {
  return {
    type: SET_USERS,
    payload: []
  }
}

// Update user
export const updateUser = updatedUser => {
  return {
    type: SET_USER,
    payload: updatedUser
  };
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

// Get Contacts
export const getContacts = () => async dispatch => {
  try {
    setLoading();
    const token = await window.localStorage.getItem('jwt-token');
    const res = await fetch('http://localhost:5000/contacts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-auth-token': token 
      }
    });

    if (res.status === 200) {
      const data = await res.json();
      const contacts = data.contacts.map(contact => {
        contact.isFriend = true;
        return contact;
      });
      dispatch({
        type: SET_CONTACTS,
        payload: contacts
      });
    }
  } catch (err) {
    console.error(err);
  }
}

// Add Contact
export const addContact = user => async dispatch => {
  try {
    setLoading();
    const token = await window.localStorage.getItem('jwt-token');
    const res = await fetch('http://localhost:5000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-auth-token': token
      },
      body: JSON.stringify({ contact: user._id })
    });

    if (res.status === 200) {
      const data = await res.json();
      dispatch({
        type: SET_CONTACTS,
        payload: data.user.contacts
      });
    }
  } catch (err) {
    console.error(err);
  }
}

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