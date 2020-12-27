import { createAction, handleActions } from 'redux-actions';
import { createRequestAction } from './createRequestAction';

//유저 정보 받아오기 도전중
const REFRESH_SET_USER = 'REFRESH_SET_USER';

export const [SETUSER, SETUSER_SUCCESS, SETUSER_FAIL] = createRequestAction(
  'SETUSER',
);
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
export const [FEEDBACK, FEEDBACK_SUCCESS, FEEDBACK_FAIL] = createRequestAction(
  'FEEDBACK',
);

export const refreshSetUser = createAction(REFRESH_SET_USER, (user) => user);
export const setUser = createAction(SETUSER, (nickname, title, id) => ({
  nickname,
  title,
  id,
}));
export const getUser = createAction(GETUSER, (id) => ({ id }));
export const reminder = createAction(REMINDER);
export const getItems = createAction(GETITEMS);
export const buyItems = createAction(BUYITEMS, (id) => ({ id }));
export const setItems = createAction(SETITEMS, (id) => ({ id }));
export const getCloset = createAction(GETCLOSET);
export const feedback = createAction(FEEDBACK, (content) => ({ content }));

const initialState = {
  colors: [],
  user: {
    id: null,
    jorang_nickname: null,
    title: 'Da:haeng',
    user_coin: 0,
    // TODO: SET-UP DEFAULT
    jorang_status: '0',
    jorang_color: '',
  },
  buy_success: false,
  buyError: '',
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
      is_worn: true,
      item: {
        item_name: '하양조랭',
        item_type: 'jorang_color',
        item_detail: 'F4E9DC',
        item_price: 5,
      },
    },
    {
      id: 3,
      is_worn: false,
      item: {
        item_name: '빨강조랭',
        item_type: 'jorang_color',
        item_detail: 'FC9285',
        item_price: 5,
      },
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
      colors:
        user.jorang_color === 'A26C8F'
          ? [user.jorang_color, 'C9B4C2', 'D9CFD6']
          : user.jorang_color === 'F8DB5C'
          ? [user.jorang_color, 'ECE1AE', 'E9E3CD']
          : user.jorang_color === '73A38F'
          ? [user.jorang_color, 'EFB6A8', 'EAD0CA']
          : user.jorang_color === 'FF714D'
          ? [user.jorang_color, 'B7CAC2', 'D1D9D6']
          : user.jorang_color === '5CA1D2'
          ? [user.jorang_color, 'AEC8DD', 'CDD9E2']
          : null,
    }),
    [GETUSER_FAIL]: (state, { payload: error }) => ({
      ...state,
    }),

    [SETUSER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user: user,
    }),
    [SETUSER_FAIL]: (state, { payload: error }) => ({
      ...state,
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
      buy_success: false,
      buyError: '',
    }),
    [GETITEMS_FAIL]: (state, { payload: error }) => ({
      ...state,
      // allItems: error,
    }),

    [BUYITEMS_SUCCESS]: (state, { payload: coin }) => ({
      ...state,
      // items: payload.items,
      user: { ...user, user_coin: coin },
      buy_success: true,
    }),
    [BUYITEMS_FAIL]: (state, { payload: error }) => ({
      ...state,
      buy_success: false,
      buyError: error,
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

    [FEEDBACK_SUCCESS]: (state, { payload: payload }) => ({
      ...state,
    }),
    [FEEDBACK_FAIL]: (state, { payload: error }) => ({
      ...state,
    }),
  },
  initialState,
);

export default user;
