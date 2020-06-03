import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CREATE, CREATE_SUCCESS, CREATE_FAIL } from 'store/user';
import * as authApi from 'api/auth';
import createRequestSaga from './createSaga';

//const getUserSaga = createRequestSaga(GETUSER, authApi.getUser);
function* createSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다
    console.log('response: ', res);
    if (res.response === 'success') {
      yield put({
        type: CREATE_SUCCESS,
        payload: res.message === 'Jorang이 성공적으로 생성되었습니다.',
      });
    } else {
      yield put({
        type: CREATE_FAIL,
        payload: res.message,
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

export function* userSaga() {
  //yield takeLatest(GETUSER, getUserSaga);
  yield takeLatest(CREATE, createSaga);
}
