import {
  SET_CONVERSATION,
  SET_CONVERSATIONS
} from '../actions/types';

const initialState = {
  conversation: null,
  conversations: [],
  error: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_CONVERSATION:
      return {
        ...state,
        conversation: action.payload
      };
    case SET_CONVERSATIONS:
      return {
        ...state,
        conversations: action.payload
      };
    default:
      return state;
  }
}