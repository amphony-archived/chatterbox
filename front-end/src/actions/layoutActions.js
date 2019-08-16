import { SET_FORM_INDEX, SET_REDIRECT } from './types';

// Set Form Index
export const setFormIndex = index => async dispatch => {
  dispatch({
    type: SET_FORM_INDEX,
    payload: index
  });
}

// Set Redirect to true
export const setRedirect = () => {
  return {
    type: SET_REDIRECT
  };
}