import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LOGIN, SIGN } from 'store/auth';
import * as authApi from 'api/auth';
import createRequestSaga from './createSaga';

const loginSaga = createRequestSaga(LOGIN, authApi.login);
const signSaga = createRequestSaga(SIGN, authApi.sign);
// function* loginSaga(action) {
//     try {
//       //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
//       const user = yield call(api.login, action.payload); //api.login(action.payload)와 같다
//       yield put({
//           type: LOGIN_SUCCESS,
//           payload: user.token
//       });
//     } catch(e){
//       yield put({
//           type: LOGIN_FAIL,
//           payload: e,
//           error: true
//       });
//     }
// }

export function* authSaga() {
  //takeEvery: 들어오는 모든 액션에 대해 특정 작업 처리
  //takeLatest: 기존에 진행 중이던 작업이 있다면 취소 처리 후, 가장 마지막으로 실행된 작업만 수행
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(SIGN, signSaga);
}
