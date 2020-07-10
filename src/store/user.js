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
export const [BUYITEMS, BUYITEMS_SUCCESS, BUYITEMS_FAIL] = createRequestAction(
  'BUYITEMS',
);
export const [SETITEMS, SETITEMS_SUCCESS, SETITEMS_FAIL] = createRequestAction(
  'SETITEMS',
);

export const refreshSetUser = createAction(REFRESH_SET_USER, (user) => user);

export const reminder = createAction(REMINDER);
export const getItems = createAction(GETITEMS, (items) => items);
export const buyItems = createAction(BUYITEMS);
export const setItems = createAction(SETITEMS);

const initialState = {
  user: {
    id: null,
    nickname: null,
    title: 'Da:haeng',
    coin: 0,
    // TODO: SET-UP DEFAULT
    joraengStatus: 2,
    color: '#ffe884',
  },
  getUserError: null,
  reminders: null,
  // items: null,
  allItems: {
    had_items: [
      {
        id: 0,
        item_name: '보라조랭',
        item_type: 'jorang_color',
        item_detail: '#BD97B4',
        item_price: 5,
      },
      {
        id: 1,
        item_name: '하양조랭',
        item_type: 'jorang_color',
        item_detail: '#F4E9DC',
        item_price: 5,
      },
      {
        id: 2,
        item_name: '하늘조랭',
        item_type: 'jorang_color',
        item_detail: '#8BAAD8',
        item_price: 5,
      },
    ],
    not_had_items: [
      {
        id: 3,
        item_name: '빨강조랭',
        item_type: 'jorang_color',
        item_detail: '#FC9285',
        item_price: 5,
      },
      {
        id: 4,
        item_name: '노랑조랭',
        item_type: 'jorang_color',
        item_detail: '#FFE884',
        item_price: 5,
      },
    ],
  },

  hasItems: [
    {
      id: 1,
      item_name: '하양조랭',
      item_type: 'jorang_color',
      item_detail: '#F4E9DC',
      item_price: 5,
      is_worn: true,
    },
    {
      id: 3,
      item_name: '빨강조랭',
      item_type: 'jorang_color',
      item_detail: '#FC9285',
      item_price: 5,
      is_worn: false,
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

    [BUYITEMS_SUCCESS]: (state, { payload: payload }) => ({
      ...state,
      items: payload.items,
      user: { ...user, coin: payload.coin },
    }),
    [BUYITEMS_FAIL]: (state, { payload: error }) => ({
      ...state,
      items: error,
    }),

    [SETITEMS_SUCCESS]: (state, { payload: items }) => ({
      ...state,
      items: items,
    }),
    [SETITEMS_FAIL]: (state, { payload: error }) => ({
      ...state,
      items: error,
    }),
  },
  initialState,
);

export default user;
