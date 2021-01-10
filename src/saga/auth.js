import { call, put, takeLatest } from 'redux-saga/effects';
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
import axios from 'axios';
import { serverURL } from './index';

// const loginSaga = createRequestSaga(LOGIN, authApi.login);
// const signSaga = createRequestSaga(SIGN, authApi.sign);

//OK
function* loginSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
    // const res = yield call(authApi.login, action.payload); //api.login(action.payload)와 같다

    // console.log('response: ', res);

    let res = null;

    switch (action.payload.sns) {
      case 'kakao':
        //console.log(action.payload);
        res = yield call([axios, 'get'], `${serverURL}/social/kakao_login/`);
        // res = yield call(
        //   [axios, 'get'],
        //   `${serverURL}/social/kakao_login_callback/?code=`.concat(
        //     action.payload.sns,
        //   ),
        // );
        break;

      case 'naver':
        res = yield call([axios, 'get'], `${serverURL}/social/naver_login/`);
        break;

      default:
        const param = {
          email: action.payload.email,
          password: action.payload.password,
        };
        res = yield call([axios, 'post'], `${serverURL}/login/`, param);
        break;
    }

    console.log(res);
    if (res.data.response === 'success') {
      yield put({
        type: LOGIN_SUCCESS,
        payload: res.data.message,
      });
      localStorage.setItem('accessToken', res.data.message.token);
      localStorage.setItem('profile', res.data.message.profile_id);
      localStorage.setItem('record_id', res.data.message.today_post_id);
    } else {
      if (res.data.message === '유효하지않은 계정입니다.') {
        yield put({
          type: LOGIN_FAIL,
          payload: res.data.message,
          error: true,
        });
      } else {
        yield put({
          type: LOGIN_FAIL,
          payload: res.data.message,
        });
      }
    }
  } catch (e) {
    yield put({
      type: LOGIN_FAIL,
      payload: e,
      error: true,
    });
  }
}

//OK
function* signSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.sign, action.payload); //api.login(action.payload)와 같다

    const token = localStorage.getItem('firebase');
    //alert(token);
    const param = {
      profile: {
        email: action.payload.email,
        password: action.payload.password,
        uid: token ? token : 'ex',
      },
    };
    const res = yield call([axios, 'post'], `${serverURL}/signup/`, param);

    console.log('response: ', res);
    //alert(JSON.stringify(res));
    localStorage.setItem('accessToken', res.data.message.token);
    if (res.data.response === 'success') {
      yield put({
        type: SIGN_SUCCESS,
        payload: res.data.message === '이메일을 전송하였습니다.',
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

//OK
function* createSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    const param = {
      nickname: action.payload.nickname,
    };

    const res = yield call([axios, 'post'], `${serverURL}/jorang/`, param, {
      headers: headers,
    });

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
