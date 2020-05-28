import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestAction } from './createRequestAction';

export const [
  GET_QUESTION,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAIL,
] = createRequestAction('GET_QUESTION');
export const [
  SET_DIARY,
  SET_DIARY_SUCCESS,
  SET_DIARY_FAIL,
] = createRequestAction('SET_DIARY');
export const [
  GET_DIARIES,
  GET_DIARIES_SUCCESS,
  GET_DIARIES_FAIL,
] = createRequestAction('GET_DIARIES');

export const getQuestion = createAction(GET_QUESTION);
export const setDiary = createAction(SET_DIARY, ({ question, detail }) => ({
  question,
  detail,
}));
export const getDiaries = createAction(GET_DIARIES, ({ user }) => ({
  user,
}));

const initialState = {
  question: '',
  diary: {
    question: '',
    detail: '',
  },
  diaries: [
    {
      question: '',
      question_deatil: '',
      diary_detail: '',
    },
  ],
};

const auth = handleActions(
  {
    [GET_QUESTION_SUCCESS]: (state, { payload: question }) => ({
      ...state,
      question: question,
    }),
    [GET_QUESTION_FAIL]: (state, { payload: error }) => ({
      ...state,
      question: error,
    }),

    [SET_DIARY_SUCCESS]: (state, { payload: diary }) => ({
      ...state,
      diary: diary,
    }),
    [SET_DIARY_FAIL]: (state, { payload: error }) => ({
      ...state,
      diary: error,
    }),

    [GET_DIARIES_SUCCESS]: (state, { payload: diaries }) => ({
      ...state,
      diaries: diaries,
    }),
    [GET_DIARIES_FAIL]: (state, { payload: error }) => ({
      ...state,
      diaries: error,
    }),
  },
  initialState,
);

export default auth;
