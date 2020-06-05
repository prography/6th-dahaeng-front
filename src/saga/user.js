import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CREATE, CREATE_SUCCESS, CREATE_FAIL } from 'store/user';
import { REMINDER, REMINDER_SUCCESS, REMINDER_FAIL } from 'store/user';
import * as authApi from 'api/auth';
import createRequestSaga from './createSaga';
import axios from 'axios';

//const getUserSaga = createRequestSaga(GETUSER, authApi.getUser);
function* createSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    const param = {
      nickname: action.payload.name,
      color: action.payload.color,
    };
    const res = yield call(
      [axios, 'post'],
      'http://ec2-15-164-55-163.ap-northeast-2.compute.amazonaws.com:7878/jorang_create/',
      param,
      { headers: headers },
    );

    console.log('response: ', res);
    if (res.response === 'success') {
      yield put({
        type: CREATE_SUCCESS,
        payload: res.data.message === 'Jorang이 성공적으로 생성되었습니다.',
      });
    } else {
      yield put({
        type: CREATE_FAIL,
        payload: res.data.message,
        error: true,
      });
    }
  } catch (e) {
    yield put({
      type: CREATE_FAIL,
      payload: e,
      error: true,
    });
  }
}

function* reminderSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    console.log('rminder');
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };
    const res = yield call(
      [axios, 'get'],
      'http://ec2-15-164-55-163.ap-northeast-2.compute.amazonaws.com:7878/reminder/',
      { headers: headers },
    );

    console.log('response: ', res);
    if (res.response === 'success') {
      yield put({
        type: REMINDER_SUCCESS,
        payload: res.data.message,
      });
    } else {
      yield put({
        type: REMINDER_FAIL,
        payload: res.data.message,
        error: true,
      });
    }
  } catch (e) {
    yield put({
      type: REMINDER_FAIL,
      payload: e,
      error: true,
    });
  }
}

export function* userSaga() {
  //yield takeLatest(GETUSER, getUserSaga);
  yield takeLatest(CREATE, createSaga);
  yield takeLatest(REMINDER, reminderSaga);
}
