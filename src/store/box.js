import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestAction } from './createRequestAction';

export const [
  GET_QUESTION,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAIL,
] = createRequestAction('GET_QUESTION');
export const [
  SET_RECORD,
  SET_RECORD_SUCCESS,
  SET_RECORD_FAIL,
] = createRequestAction('SET_RECORD');
export const [
  GET_RECORDS,
  GET_RECORDS_SUCCESS,
  GET_RECORDS_FAIL,
] = createRequestAction('GET_RECORDS');

export const getQuestion = createAction(GET_QUESTION);
export const setDiary = createAction(SET_RECORD, ({ question, detail }) => ({
  question,
  detail,
}));
export const getDiaries = createAction(GET_RECORDS, ({ user }) => ({
  user,
}));

const initialState = {
  question: '',
  record: {
    question: '',
    detail: '',
  },
  records: [
    {
      question: '',
      detail: '',
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

    [SET_RECORD_SUCCESS]: (state, { payload: diary }) => ({
      ...state,
      record: diary,
    }),
    [SET_RECORD_FAIL]: (state, { payload: error }) => ({
      ...state,
      record: error,
    }),

    [GET_RECORDS_SUCCESS]: (state, { payload: diaries }) => ({
      ...state,
      records: diaries,
    }),
    [GET_RECORDS_FAIL]: (state, { payload: error }) => ({
      ...state,
      records: error,
    }),
  },
  initialState,
);

export default auth;
