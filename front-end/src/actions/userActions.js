import {
  REGISTER_USER,
  LOGIN_USER,
  GET_USER,
  SEARCH_USERS,
  USER_ERROR,
  SET_LOADING
} from './types';

// Register User
export const registerUser = username => async dispatch => {
  setLoading();
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