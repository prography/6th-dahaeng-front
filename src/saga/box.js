import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  GET_QUESTION,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAIL,
  SET_RECORD,
  SET_RECORD_SUCCESS,
  SET_RECORD_FAIL,
  GET_RECORDS,
  GET_RECORDS_SUCCESS,
  GET_RECORDS_FAIL,
} from 'store/box';
import * as boxApi from 'api/box';

function* getQuestionSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
    const res = yield call(boxApi.getQuestion, action.payload); //api.login(action.payload)와 같다

    yield put({
      type: GET_QUESTION_SUCCESS,
      payload: res.question,
    });
  } catch (e) {
    yield put({
      type: GET_QUESTION_FAIL,
      payload: e,
    });
  }
}

function* setRecordSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
    const res = yield call(boxApi.setRecord, action.payload); //api.login(action.payload)와 같다

    yield put({
      type: SET_RECORD_SUCCESS,
      payload: res.question,
    });
  } catch (e) {
    yield put({
      type: SET_RECORD_FAIL,
      payload: e,
    });
  }
}

export function* boxSaga() {
  //takeEvery: 들어오는 모든 액션에 대해 특정 작업 처리
  //takeLatest: 기존에 진행 중이던 작업이 있다면 취소 처리 후, 가장 마지막으로 실행된 작업만 수행
  yield takeLatest(GET_QUESTION, getQuestionSaga);
  yield takeLatest(SET_RECORD, setRecordSaga);
}
