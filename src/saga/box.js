import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_QUESTION,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAIL,
  SET_RECORD,
  SET_RECORD_SUCCESS,
  SET_RECORD_FAIL,
  MODIFY_RECORD,
  MODIFY_RECORD_SUCCESS,
  MODIFY_RECORD_FAIL,
  DELETE_RECORD,
  DELETE_RECORD_SUCCESS,
  DELETE_RECORD_FAIL,
  GET_RECORDS,
  GET_RECORDS_SUCCESS,
  GET_RECORDS_FAIL,
  SEARCH_RECORDS,
  SEARCH_RECORDS_SUCCESS,
  SEARCH_RECORDS_FAIL,
  GET_TODAY,
  GET_TODAY_SUCCESS,
  GET_TODAY_FAIL,
} from 'store/box';
import axios from 'axios';
import { serverURL } from './index';

//OK
function* getQuestionSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
    // const res = yield call(boxApi.getQuestion, action.payload); //api.login(action.payload)와 같다

    // const params = {
    //   content:
    //     '오늘 본 것 중에 가장 예쁜 색을 갖고 있던 것은 무엇인가요? 성은이sfa이d이',
    // };
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
      `${serverURL}/record/posts/questions/`,
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
//OK
function* setRecordSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
    // const res = yield call(boxApi.setRecord, action.payload); //api.login(action.payload)와 같다

    // const param = {
    //   detail: action.payload.detail,
    //   emotion: action.payload.emotion,
    //   image: action.payload.image,
    // };

    //console.log(action.payload);
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
      'content-type':
        'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    };

    const res = yield call(
      [axios, 'post'],
      `${serverURL}/record/posts/`,
      action.payload.formData,
      // param,
      { headers: headers },
    );

    console.log('setRecord: ', res);
    localStorage.setItem('record_id', res.data.post_detail.id);
    yield put({
      type: SET_RECORD_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    yield put({
      type: SET_RECORD_FAIL,
      payload: e,
    });
  }
}
//OK
function* modifyRecordSaga(action) {
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
      // 'content-type':
      //   'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    };

    const res = yield call(
      [axios, 'patch'],
      `${serverURL}/record/posts/${action.payload.id}/`,
      action.payload.formData,
      { headers: headers },
    );

    yield put({
      type: MODIFY_RECORD_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    yield put({
      type: MODIFY_RECORD_FAIL,
      payload: e,
    });
  }
}

function* deleteRecordSaga(action) {
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
    };

    const res = yield call(
      [axios, 'delete'],
      `${serverURL}/record/posts/${action.payload.id}/`,
      // param,
      { headers: headers },
    );

    console.log('delete ', res);
    if (res.data === '') {
      yield put({
        type: DELETE_RECORD_SUCCESS,
      });

      const res = yield call(
        [axios, 'get'],
        `${serverURL}/record/posts/`,
        // param,
        { headers: headers },
      );
      if (res.data.response === 'success') {
        yield put({
          type: GET_RECORDS_SUCCESS,
          payload: res.data,
        });
      }
    } else {
      yield put({
        type: DELETE_RECORD_FAIL,
      });
    }
  } catch (e) {
    yield put({
      type: DELETE_RECORD_FAIL,
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

function* getTodaySaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
    //    const res = yield call(boxApi.getRecords, action.payload); //api.login(action.payload)와 같다
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    const res = yield call(
      [axios, 'get'],
      `${serverURL}/record/posts/${action.payload.id}`,
      {
        headers: headers,
      },
    );

    console.log('res', res);
    yield put({
      type: GET_TODAY_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    yield put({
      type: GET_TODAY_FAIL,
      payload: e,
    });
  }
}

function* searchRecordsSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
    //    const res = yield call(boxApi.getRecords, action.payload); //api.login(action.payload)와 같다
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };
    console.log(action.payload);

    // console.log(action.payload.search_field);
    // console.log(action.payload.search);
    const res = yield call(
      [axios, 'get'],
      `${serverURL}/record/posts/?search_fields=${action.payload.search_fields}&search=${action.payload.search}`,
      {
        headers: headers,
      },
    );

    console.log('res', res);
    yield put({
      type: SEARCH_RECORDS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    yield put({
      type: SEARCH_RECORDS_FAIL,
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
  yield takeLatest(MODIFY_RECORD, modifyRecordSaga);
  yield takeLatest(DELETE_RECORD, deleteRecordSaga);
  yield takeLatest(SEARCH_RECORDS, searchRecordsSaga);
  yield takeLatest(GET_TODAY, getTodaySaga);
}
