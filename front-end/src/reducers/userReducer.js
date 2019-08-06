import {
  REGISTER_USER,
  LOGIN_USER,
  GET_USER,
  SEARCH_USERS,
  USER_ERROR,
  SET_LOADING
} from '../actions/types';

const initialState = {
  accountID: null,
  user: null,
  users: null,
  loading: false,
  error: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        accountID: action.payload,
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
