import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { REMINDER, REMINDER_SUCCESS, REMINDER_FAIL } from 'store/user';
import { GETITEMS, GETITEMS_SUCCESS, GETITEMS_FAIL } from 'store/user';
import axios from 'axios';

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
      'http://ec2-15-164-55-163.ap-northeast-2.compute.amazonaws.com:7878/reminder',
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

function* getItemSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    console.log('getItmes');
    // const headers = {
    //   Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    // };
    const res = yield call(
      [axios, 'get'],
      // 'http://ec2-15-164-55-163.ap-northeast-2.compute.amazonaws.com:7878/items',
      // { headers: headers },
    );

    console.log('response: ', res);
    if (res.response === 'success') {
      yield put({
        type: GETITEMS_SUCCESS,
        payload: res.data.message,
      });
    } else {
      yield put({
        type: GETITEMS_FAIL,
        payload: res.data.message,
        error: true,
      });
    }
  } catch (e) {
    yield put({
      type: GETITEMS_FAIL,
      payload: e,
      error: true,
    });
  }
}

export function* userSaga() {
  //yield takeLatest(GETUSER, getUserSaga);
  yield takeLatest(REMINDER, reminderSaga);
  yield takeLatest(GETITEMS, getItemSaga);
}
