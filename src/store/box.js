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
  MODIFY_RECORD,
  MODIFY_RECORD_SUCCESS,
  MODIFY_RECORD_FAIL,
] = createRequestAction('MODIFY_RECORD');
export const [
  DELETE_RECORD,
  DELETE_RECORD_SUCCESS,
  DELETE_RECORD_FAIL,
] = createRequestAction('DELETE_RECORD');
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
export const modifyRecord = createAction(MODIFY_RECORD);
export const deleteRecord = createAction(DELETE_RECORD);

const initialState = {
  question: null,
  record: [
    {
      id: 0,
      created_at: '0000-00-00',
      question: '행복 랜덤 질문',
      detail: '사용자 행복 기록',
      profile: '사용자 이메일',
      emotion: '대표감정',
      image: '이미지 url',
      continuity: '연속 기록 횟수',
    },
  ],
  records: [
    {
      id: 0,
      created_at: '0000-00-00',
      question: '행복 랜덤 질문',
      detail: '사용자 행복 기록',
      profile: '사용자 이메일',
      emotion: '대표감정',
      image: '이미지 url',
      continuity: '연속 기록 횟수',
    },
  ],
  searchs: null,
  coin: 0,
  continuity: 0,
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

    [SET_RECORD_SUCCESS]: (state, { payload: detail }) => ({
      ...state,
      record: detail.record,
      coin: detail.coin,
      continuity: detail.continuity,
    }),
    [SET_RECORD_FAIL]: (state, { payload: error }) => ({
      ...state,
      record: error,
    }),

    [MODIFY_RECORD_SUCCESS]: (state, { payload: detail }) => ({
      ...state,
      record: detail.record,
    }),
    [MODIFY_RECORD_FAIL]: (state, { payload: error }) => ({
      ...state,
      record: error,
    }),

    [DELETE_RECORD_SUCCESS]: (state, { payload: detail }) => ({
      ...state,
    }),
    [DELETE_RECORD_FAIL]: (state, { payload: error }) => ({
      ...state,
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
