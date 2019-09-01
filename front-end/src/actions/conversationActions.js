import {
  SET_CONVERSATIONS
} from './types';

// Get conversations
export const getConversations = () => async dispatch => {
  try {
    const token = await getToken();
    const res = await fetch('http://localhost:5000/conversations', {
      method: 'GET',
      headers: { 'x-auth-token': token }
    });

    if (res.status === 200) {
      const data = await res.json();
      dispatch({
        type: SET_CONVERSATIONS,
        payload: data.conversations
      });
    }
  } catch (err) {
    console.error(err);
  }
}

// Add a conversation
export const addConversation = participants => async dispatch => {
  try {
    const token = await getToken();
    const res = await fetch('http://localhost:5000/conversations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-auth-token': token
      },
      body: JSON.stringify({ participants })
    });

    if (res.status === 200) {
      const data = await res.json();
      dispatch({
        type: SET_CONVERSATIONS,
        payload: data.conversation
      });
    }
  } catch (err) {
    console.error(err);
  }
}

// Get token
const getToken = () => (window.localStorage.getItem('jwt-token'));