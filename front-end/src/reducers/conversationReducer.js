import {
  SET_CONVERSATIONS
} from '../actions/types';

const initialState = {
  conversations: [],
  error: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_CONVERSATIONS:
      return {
        ...state,
        conversations: [...state.conversations, action.payload]
      };
    default:
      return state;
  }
}