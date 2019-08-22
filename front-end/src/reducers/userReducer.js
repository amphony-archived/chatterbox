import {
  SET_CURRENT_USER,
  GET_USER,
  SEARCH_USERS,
  USER_ERROR,
  SET_LOADING
} from '../actions/types';

const initialState = {
  currentUser: null,
  user: null,
  users: null,
  loading: false,
  error: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
