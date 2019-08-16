import { SET_FORM_INDEX, SET_REDIRECT } from '../actions/types';

const initialState = {
  formIndex: 0,
  redirect: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_FORM_INDEX:
      return {
        ...state,
        formIndex: action.payload
      };
    case SET_REDIRECT:
      return {
        ...state,
        redirect: true
      };
    default:
      return state;
  }
}