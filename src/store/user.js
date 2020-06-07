import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestAction } from './createRequestAction';

const REFRESH_SET_USER = 'REFRESH_SET_USER';

export const [REMINDER, REMINDER_SUCCESS, REMINDER_FAIL] = createRequestAction(
  'REMINDER',
);

export const refreshSetUser = createAction(REFRESH_SET_USER, (user) => user);

export const reminder = createAction(REMINDER);

const initialState = {
  user: {
    id: 111,
    name: '다스',
    title: 'Da:haeng',
    coin: 0,
    picture: '조랭',
  },
  getUserError: null,
  nickname: null,
  color: null,
  reminders: null,
};

const user = handleActions(
  {
    [REFRESH_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),

    [REMINDER_SUCCESS]: (state, { payload: reminders }) => ({
      ...state,
      reminders: reminders,
    }),
    [REMINDER_FAIL]: (state, { payload: error }) => ({
      ...state,
      reminders: error,
    }),
  },
  initialState,
);

export default user;
