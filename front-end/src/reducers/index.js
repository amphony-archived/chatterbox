import { combineReducers } from 'redux';
import layoutReducer from './layoutReducer';
import userReducer from './userReducer';
import conversationReducer from './conversationReducer';

export default combineReducers({
  layout: layoutReducer,
  user: userReducer,
  conversation: conversationReducer
});