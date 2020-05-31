import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestAction } from './createRequestAction';

const REFRESH_SET_USER = 'REFRESH_SET_USER';
export const [GETUSER, GETUSER_SUCCESS, GETUSER_FAIL] = createRequestAction(
  'GETUSER',
);

export const refreshSetUser = createAction(REFRESH_SET_USER, (user) => user);
export const getUser = createAction(GETUSER);

const initialState = {
  user: 'null',
  getUserError: null,
};

const user = handleActions(
  {
    [REFRESH_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),

    [GETUSER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      getUserError: null,
    }),
    [GETUSER_FAIL]: (state, { payload: error }) => ({
      ...state,
      user: null,
      getUserError: error,
    }),
  },
  initialState,
);

export default user;
