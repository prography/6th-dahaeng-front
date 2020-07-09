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
import axios from 'axios';
import { serverURL } from './index';

function* getQuestionSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
    // const res = yield call(boxApi.getQuestion, action.payload); //api.login(action.payload)와 같다

    const params = {
      content:
        '오늘 본 것 중에 가장 예쁜 색을 갖고 있던 것은 무엇인가요? 성은이sfa이d이',
    };
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    //  DB에 질문 추가
    // yield call(
    //   [axios, 'post'],
    //   'http://ec2-52-79-232-8.ap-northeast-2.compute.amazonaws.com/record/questions/',
    //   params,
    //   { headers: headers },
    // );

    const res = yield call(
      [axios, 'get'],
      `${serverURL}/record/posts/newpost/`,
      { headers: headers },
    );

    console.log(res);
    yield put({
      type: GET_QUESTION_SUCCESS,
      payload: res.data[0],
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
    // const res = yield call(boxApi.setRecord, action.payload); //api.login(action.payload)와 같다

    // const param = {
    //   detail: action.payload.detail,
    //   emotion: action.payload.emotion,
    //   image: action.payload.image,
    // };

    console.log(action.payload);
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
      'content-type':
        'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    };

    const res = yield call(
      [axios, 'post'],
      `${serverURL}/record/posts/create/`,
      action.payload.formData,
      // param,
      { headers: headers },
    );

    yield put({
      type: SET_RECORD_SUCCESS,
      payload: res.data.question,
    });
  } catch (e) {
    yield put({
      type: SET_RECORD_FAIL,
      payload: e,
    });
  }
}

function* getRecordsSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
    //    const res = yield call(boxApi.getRecords, action.payload); //api.login(action.payload)와 같다
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    const res = yield call([axios, 'get'], `${serverURL}/record/posts/`, {
      headers: headers,
    });

    console.log('res', res);
    yield put({
      type: GET_RECORDS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    yield put({
      type: GET_RECORDS_FAIL,
      payload: e,
    });
  }
}

export function* boxSaga() {
  //takeEvery: 들어오는 모든 액션에 대해 특정 작업 처리
  //takeLatest: 기존에 진행 중이던 작업이 있다면 취소 처리 후, 가장 마지막으로 실행된 작업만 수행
  yield takeLatest(GET_QUESTION, getQuestionSaga);
  yield takeLatest(SET_RECORD, setRecordSaga);
  yield takeLatest(GET_RECORDS, getRecordsSaga);
}
