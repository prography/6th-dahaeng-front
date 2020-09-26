import { createAction, handleActions } from 'redux-actions';
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
export const [
  GET_TODAY,
  GET_TODAY_SUCCESS,
  GET_TODAY_FAIL,
] = createRequestAction('GET_TODAY');

export const getQuestion = createAction(GET_QUESTION);
export const setRecord = createAction(SET_RECORD, (formData) => ({
  formData,
}));
export const getRecords = createAction(GET_RECORDS);
export const searchRecords = createAction(
  SEARCH_RECORDS,
  (search_fields, search) => ({ search_fields, search }),
);
export const modifyRecord = createAction(MODIFY_RECORD, (formData, id) => ({
  formData,
  id,
}));
export const deleteRecord = createAction(DELETE_RECORD, (id) => ({ id }));
export const getToday = createAction(GET_TODAY, (id) => ({ id }));

const initialState = {
  question: {
    last_login: null,
    question: null,
  },
  record: null,
  // records: null,

  records: [
    {
      created_at: 2020 - 8 - 14,
      question: '주히 바보',
      detail: '다스 몽총',
    },

    {
      created_at: 2020 - 8 - 14,
      question: '주히 바보',
      detail: '다스 몽총',
    },

    {
      created_at: 2020 - 8 - 14,
      question: '주히 바보',
      detail: '다스 몽총',
    },

    {
      created_at: 2020 - 8 - 14,
      question: '주히 바보',
      detail: '다스 몽총',
    },
  ],

  searchs: null,

  // searchs: [
  //   {
  //     id: 0,
  //     created_at: '0000-00-00',
  //     question: '행복 랜덤 질문',
  //     detail: '사용자 행복 기록',
  //     profile: '사용자 이메일',
  //     emotion: '대표감정',
  //     image: '이미지 url',
  //     continuity: '연속 기록 횟수',
  //   },
  // ],
  coin: 0,
  continuity: 0,
  reward_of_today: 0,
};

const box = handleActions(
  {
    [GET_QUESTION_SUCCESS]: (state, { payload: question }) => ({
      ...state,
      question: question,
    }),
    [GET_QUESTION_FAIL]: (state, { payload: error }) => ({
      ...state,
      // question: error,
    }),

    [SET_RECORD_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      record: data.post_detail,
      coin: data.reward_detail.coin,
      continuity: data.reward_detail.continuity,
      reward_of_today: data.reward_detail.reward_of_today,
    }),
    [SET_RECORD_FAIL]: (state, { payload: error }) => ({
      ...state,
      //record: error,
    }),

    [MODIFY_RECORD_SUCCESS]: (state, { payload: detail }) => ({
      ...state,
    }),
    [MODIFY_RECORD_FAIL]: (state, { payload: error }) => ({
      ...state,
      //record: error,
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
      // records: error,
    }),

    [SEARCH_RECORDS_SUCCESS]: (state, { payload: searchs }) => ({
      ...state,
      searchs: searchs,
    }),
    [SEARCH_RECORDS_FAIL]: (state, { payload: error }) => ({
      ...state,
      //  searchs: error,
    }),

    [GET_TODAY_SUCCESS]: (state, { payload: detail }) => ({
      ...state,
      record: detail,
    }),
    [GET_TODAY_FAIL]: (state, { payload: error }) => ({
      ...state,
      record: null,
    }),
  },
  initialState,
);

export default box;
