import { SET_FORM_INDEX } from '../actions/types';

const initialState = {
  index: 0
}

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_FORM_INDEX:
      return {
        ...state,
        index: action.payload
      };
    default:
      return state;
  }
}