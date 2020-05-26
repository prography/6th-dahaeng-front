import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestAction } from './createAction';

const CHANGE_FORM = 'CHANGE_FORM';
const INIT_FORM = 'INIT_FORM';

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL] = createRequestAction('LOGIN');
export const [SIGN, SIGN_SUCCESS, SIGN_FAIL] = createRequestAction('SIGN');

//form: login/sign, type: username, password, passwordConfirm, value: 값
export const changeForm = createAction(CHANGE_FORM, ({ form, key, value }) => ({
  form,
  key,
  value,
}));
export const initForm = createAction(INIT_FORM, (form) => form);

export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));

export const sign = createAction(SIGN, ({ username, password }) => ({
  username,
  password,
}));

const initialState = {
  sign: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FORM]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INIT_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),

    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAIL]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),

    [SIGN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGN_FAIL]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
