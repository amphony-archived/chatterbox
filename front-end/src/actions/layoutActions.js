import { SET_FORM_INDEX } from './types';

// Set Form Index
export const setFormIndex = index => async dispatch => {
  dispatch({
    type: SET_FORM_INDEX,
    payload: index
  });
}