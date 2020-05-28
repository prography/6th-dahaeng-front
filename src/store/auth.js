import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestAction } from './createRequestAction';

const CHANGE_FORM = 'CHANGE_FORM';
const INIT_FORM = 'INIT_FORM';

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL] = createRequestAction('LOGIN');
export const [SIGN, SIGN_SUCCESS, SIGN_FAIL] = createRequestAction('SIGN');

//form: login/sign, key: email, password, passwordConfirm, value: 값
export const changeForm = createAction(CHANGE_FORM, ({ form, key, value }) => ({
  form,
  key,
  value,
}));
export const initForm = createAction(INIT_FORM, (form) => form);

export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));

export const sign = createAction(SIGN, ({ email, password }) => ({
  email,
  password,
}));

const initialState = {
  sign: {
    email: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    email: '',
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

    [LOGIN_SUCCESS]: (state, { payload: token }) => ({
      ...state,
      authError: null,
      auth: token,
    }),
    [LOGIN_FAIL]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),

    [SIGN_SUCCESS]: (state, { payload: isSuccess }) => ({
      ...state,
      authError: null,
      auth: isSuccess,
    }),
    [SIGN_FAIL]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
