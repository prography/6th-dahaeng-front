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
export const setRecord = createAction(SET_RECORD, ({ question, detail }) => ({
  question,
  detail,
}));
export const getRecords = createAction(GET_RECORDS, ({ user }) => ({
  user,
}));

const initialState = {
  question: {
    date: '0516',
    text: '오늘의 색은?',
  },
  record: {
    question: {
      date: '0516',
      text: '오늘의 색은?',
    },
    detail: '노랑색',
    img: "/images/defaultJoraeng.png",
  },
  records: [
    {
      question: {
        date: '0522',
        text: 'text1',
      },
      detail: 'detail1',
      img: null,
    },
    {
      question: {
        date: '0523',
        text: 'text2',
      },
      detail: 'detail2',
      img: null,
    },
    {
      question: {
        date: '0524',
        text: 'text3',
      },
      detail: 'detail3',
      img: null,
    },
  ],
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
  },
  initialState,
);

export default box;
