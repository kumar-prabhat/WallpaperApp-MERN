import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import imagedata from './imagedata';

export default combineReducers({
  alert,
  auth,
  imagedata,
});
