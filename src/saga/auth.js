import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGN,
  SIGN_SUCCESS,
  SIGN_FAIL,
  CREATE,
  CREATE_SUCCESS,
  CREATE_FAIL,
} from 'store/auth';
import * as authApi from 'api/auth';
import createRequestSaga from './createSaga';
import axios from 'axios';

// const loginSaga = createRequestSaga(LOGIN, authApi.login);
// const signSaga = createRequestSaga(SIGN, authApi.sign);
function* loginSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
    // const res = yield call(authApi.login, action.payload); //api.login(action.payload)와 같다

    // console.log('response: ', res);

    const param = {
      email: action.payload.email,
      password: action.payload.password,
    };
    const res = yield call(
      [axios, 'post'],
      'http://ec2-15-164-55-163.ap-northeast-2.compute.amazonaws.com:7878/login/',
      param,
    );

    console.log(res);
    if (res.data.response === 'success') {
      yield put({
        type: LOGIN_SUCCESS,
        payload: res.data.message,
      });
      localStorage.setItem('accessToken', res.data.message.token);
    } else {
      yield put({
        type: LOGIN_FAIL,
        payload: res.data.non_field_errors,
        error: true,
      });
    }
  } catch (e) {
    yield put({
      type: LOGIN_FAIL,
      payload: e,
      error: true,
    });
  }
}

function* signSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.sign, action.payload); //api.login(action.payload)와 같다

    // console.log(res);

    const param = {
      profile: {
        email: action.payload.email,
        password: action.payload.password,
      },
    };
    const res = yield call(
      [axios, 'post'],
      'http://ec2-15-164-55-163.ap-northeast-2.compute.amazonaws.com:7878/signup/',
      param,
    );

    console.log('response: ', res);
    localStorage.setItem('accessToken', res.data.message.token);
    if (res.data.response === 'success') {
      yield put({
        type: SIGN_SUCCESS,
        payload: res.data.message === '회원가입이 완료되었습니다.',
      });
    } else {
      yield put({
        type: SIGN_FAIL,
        payload: res.data.message,
        error: true,
      });
    }
  } catch (e) {
    yield put({
      type: SIGN_FAIL,
      payload: e,
      error: true,
    });
  }
}

function* createSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    const param = {
      nickname: action.payload.nickname,
      color: action.payload.color,
    };

    const res = yield call(
      [axios, 'post'],
      'http://ec2-15-164-55-163.ap-northeast-2.compute.amazonaws.com:7878/jorang_create/',
      param,
      { headers: headers },
    );

    console.log('response: ', res);
    if (res.data.response === 'success') {
      yield put({
        type: CREATE_SUCCESS,
        payload: res.data.message,
      });
    } else {
      yield put({
        type: CREATE_FAIL,
        payload: res.data.message,
        error: true,
      });
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: CREATE_FAIL,
      payload: e,
      error: true,
    });
  }
}

export function* authSaga() {
  //takeEvery: 들어오는 모든 액션에 대해 특정 작업 처리
  //takeLatest: 기존에 진행 중이던 작업이 있다면 취소 처리 후, 가장 마지막으로 실행된 작업만 수행
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGN, signSaga);
  yield takeLatest(CREATE, createSaga);
}
