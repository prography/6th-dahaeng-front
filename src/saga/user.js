import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import * as api from 'api';
import createRequestSaga from './createSaga';

// == const loginSaga = createRequestSaga(LOGIN, api.login);
function* loginSaga(action) {
  //   try {
  //     //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
  //     const user = yield call(api.login, action.payload); //api.login(action.payload)와 같다
  //     yield put({
  //         type: LOGIN_SUCCESS,
  //         payload: user.token
  //     });
  //   } catch(e){
  //     yield put({
  //         type: LOGIN_FAIL,
  //         payload: e,
  //         error: true
  //     });
  //   }
}

export function* userSaga() {
  //takeEvery: 들어오는 모든 액션에 대해 특정 작업 처리
  // yield takeEvery(LOGIN, loginSaga);
  //takeLatest: 기존에 진행 중이던 작업이 있다면 취소 처리 후, 가장 마지막으로 실행된 작업만 수행
  //yield takeLatest(LOGIN, loginSaga);
}
