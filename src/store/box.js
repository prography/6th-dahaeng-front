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
export const [
  SEARCH_RECORDS,
  SEARCH_RECORDS_SUCCESS,
  SEARCH_RECORDS_FAIL,
] = createRequestAction('SEARCH_RECORDS');

export const getQuestion = createAction(GET_QUESTION);
export const setRecord = createAction(SET_RECORD, (formData) => ({
  formData,
}));
export const getRecords = createAction(GET_RECORDS);
export const searchRecords = createAction(SEARCH_RECORDS);

const initialState = {
  question: null,
  record: null,
  records: null,
  searchs: null,
};

const box = handleActions(
  {
    [GET_QUESTION_SUCCESS]: (state, { payload: question }) => ({
      ...state,
      question: question,
    }),
    [GET_QUESTION_FAIL]: (state, { payload: error }) => ({
      ...state,
      question: error,
    }),

    [SET_RECORD_SUCCESS]: (state, { payload: record }) => ({
      ...state,
      record: record,
    }),
    [SET_RECORD_FAIL]: (state, { payload: error }) => ({
      ...state,
      record: error,
    }),

    [GET_RECORDS_SUCCESS]: (state, { payload: records }) => ({
      ...state,
      records: records,
    }),
    [GET_RECORDS_FAIL]: (state, { payload: error }) => ({
      ...state,
      records: error,
    }),

    [SEARCH_RECORDS_SUCCESS]: (state, { payload: searchs }) => ({
      ...state,
      searchs: searchs,
    }),
    [SEARCH_RECORDS_FAIL]: (state, { payload: error }) => ({
      ...state,
      searchs: error,
    }),
  },
  initialState,
);

export default box;
