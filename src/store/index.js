import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import box from './box';

const rootReducer = combineReducers({
  auth,
  user,
  box,
});

export default rootReducer;
