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
  jorang_color: '',
  jorang_items: [],
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
  hasItems: [],
  allItems: [],
  items: [],
};

const user = handleActions(
  {
    [REFRESH_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),

    [GETUSER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user: user.user,
      colors:
        user.jorang_color === 'A26C8F' //PURPLE
          ? [user.jorang_color, 'D9C4D2', 'EDE3EB']
          : user.jorang_color === 'F8DB5C' //YELLOW
          ? [user.jorang_color, 'FDF0BC', 'FEF8E1']
          : user.jorang_color === 'FF714D' //RED
          ? [user.jorang_color, 'F5C2B2', 'FAE3DC']
          : user.jorang_color === '73A38F' //GREEN
          ? [user.jorang_color, 'C6DAD2', 'E5EEEB']
          : user.jorang_color === '5CA1D2' //BLUE
          ? [user.jorang_color, 'BDD8EC', 'E1EEF7']
          : null,
      jorang_items: user.jorang_items,
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

    [FEEDBACK_SUCCESS]: (state, { payload: feedback }) => ({
      ...state,
    }),
    [FEEDBACK_FAIL]: (state, { payload: error }) => ({
      ...state,
    }),
  },
  initialState,
);

export default user;
