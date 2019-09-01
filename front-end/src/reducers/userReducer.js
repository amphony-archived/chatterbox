import {
  SET_USER,
  SET_USERS,
  SET_CONTACTS,
  SET_LOADING
} from '../actions/types';

const initialState = {
  user: null,
  users: [],
  contacts: [],
  loading: false,
  error: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
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
