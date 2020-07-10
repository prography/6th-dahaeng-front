import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestAction } from './createRequestAction';

//유저 정보 받아오기 도전중
const REFRESH_SET_USER = 'REFRESH_SET_USER';

export const [GETUSER, GETUSER_SUCCESS, GETUSER_FAIL] = createRequestAction(
  'GETUSER',
);
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
export const [
  GETCLOSET,
  GETCLOSET_SUCCESS,
  GETCLOSET_FAIL,
] = createRequestAction('GETCLOSET');

export const refreshSetUser = createAction(REFRESH_SET_USER, (user) => user);
export const getUser = createAction(GETUSER, (id) => ({ id }));
export const reminder = createAction(REMINDER);
export const getItems = createAction(GETITEMS);
export const buyItems = createAction(BUYITEMS, (id) => ({ id }));
export const setItems = createAction(SETITEMS, (items) => ({ items }));
export const getCloset = createAction(GETCLOSET);

const initialState = {
  user: {
    id: null,
    jorang_nickname: null,
    title: 'Da:haeng',
    user_coin: 0,
    // TODO: SET-UP DEFAULT
    jorang_status: '2',
    jorang_color: 'ffe884',
  },
  getUserError: null,
  notices: {
    notice: [
      {
        id: 1,
        title: '다행에 가입하신걸 환영합니다!',
        content: '보다 나은 서비스로 제공하겠습니다.\r\n\r\n감사합니다 :)',
        created_at: '2020-07-10',
      },
    ],
    reminder: [
      {
        post: 1,
        interval: 2,
        created_at: '2020-06-03',
        posts: {
          emotion: 'WARM',
          detail: '오늘은 날씨가 참 좋았어요!',
          question: '테스트 질문입니다.',
          image: '/media/default_image_sample.jpg',
        },
      },
    ],
  },
  // items: null,
  allItems: {
    had_items: [
      {
        id: 0,
        item_name: '보라조랭',
        item_type: 'jorang_color',
        item_detail: 'BD97B4',
        item_price: 5,
      },
      {
        id: 1,
        item_name: '하양조랭',
        item_type: 'jorang_color',
        item_detail: 'F4E9DC',
        item_price: 5,
      },
      {
        id: 2,
        item_name: '하늘조랭',
        item_type: 'jorang_color',
        item_detail: '8BAAD8',
        item_price: 5,
      },
    ],
    not_had_items: [
      {
        id: 3,
        item_name: '빨강조랭',
        item_type: 'jorang_color',
        item_detail: 'FC9285',
        item_price: 5,
      },
      {
        id: 4,
        item_name: '노랑조랭',
        item_type: 'jorang_color',
        item_detail: 'FFE884',
        item_price: 5,
      },
    ],
  },

  hasItems: [
    {
      id: 1,
      item_name: '하양조랭',
      item_type: 'jorang_color',
      item_detail: 'F4E9DC',
      item_price: 5,
      is_worn: true,
    },
    {
      id: 3,
      item_name: '빨강조랭',
      item_type: 'jorang_color',
      item_detail: 'FC9285',
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

    [GETUSER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user: user,
    }),
    [GETUSER_FAIL]: (state, { payload: error }) => ({
      ...state,
      // notices: error,
    }),

    [REMINDER_SUCCESS]: (state, { payload: notices }) => ({
      ...state,
      notices: notices,
    }),
    [REMINDER_FAIL]: (state, { payload: error }) => ({
      ...state,
      // notices: error,
    }),

    [GETITEMS_SUCCESS]: (state, { payload: items }) => ({
      ...state,
      allItems: items,
    }),
    [GETITEMS_FAIL]: (state, { payload: error }) => ({
      ...state,
      // allItems: error,
    }),

    [BUYITEMS_SUCCESS]: (state, { payload: payload }) => ({
      ...state,
      items: payload.items,
      user: { ...user, coin: payload.coin },
    }),
    [BUYITEMS_FAIL]: (state, { payload: error }) => ({
      ...state,
      //  items: error,
    }),

    [SETITEMS_SUCCESS]: (state, { payload: items }) => ({
      ...state,
      items: items,
    }),
    [SETITEMS_FAIL]: (state, { payload: error }) => ({
      ...state,
      // items: error,
    }),

    [GETCLOSET_SUCCESS]: (state, { payload: items }) => ({
      ...state,
      hasItems: items,
    }),
    [GETCLOSET_FAIL]: (state, { payload: error }) => ({
      ...state,
      //   hasItems: error,
    }),
  },
  initialState,
);

export default user;
