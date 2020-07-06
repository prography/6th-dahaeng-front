import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestAction } from './createRequestAction';

//유저 정보 받아오기 도전중
const REFRESH_SET_USER = 'REFRESH_SET_USER';

export const [REMINDER, REMINDER_SUCCESS, REMINDER_FAIL] = createRequestAction(
  'REMINDER',
);
export const [GETITEMS, GETITEMS_SUCCESS, GETITEMS_FAIL] = createRequestAction(
  'GETITEMS',
);

export const refreshSetUser = createAction(REFRESH_SET_USER, (user) => user);

export const reminder = createAction(REMINDER);
export const getItems = createAction(GETITEMS, (items) => items);

const initialState = {
  user: {
    id: null,
    nickname: null,
    title: 'Da:haeng',
    coin: null,
    // TODO: SET-UP DEFAULT
    joraengStatus: 1,
    color: '#ffe884',
  },
  getUserError: null,
  reminders: null,
  // items: null,
  items: [
    {
      name: '보라조랭',
      category: 'color',
      color: '#BD97B4',
      price: 5,
      has: false,
    },
    {
      name: '하양조랭',
      category: 'color',
      color: '#F4E9DC',
      price: 5,
      has: true,
    },
    {
      name: '하늘조랭',
      category: 'color',
      color: '#8BAAD8',
      price: 5,
      has: false,
    },
    {
      name: '빨강조랭',
      category: 'color',
      color: '#FC9285',
      price: 5,
      has: false,
    },
    {
      name: '노랑조랭',
      category: 'color',
      color: '#FFE884',
      price: 5,
      has: false,
    },
  ],
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

    [GETITEMS_SUCCESS]: (state, { payload: items }) => ({
      ...state,
      items: items,
    }),
    [GETITEMS_FAIL]: (state, { payload: error }) => ({
      ...state,
      items: error,
    }),
  },
  initialState,
);

export default user;
