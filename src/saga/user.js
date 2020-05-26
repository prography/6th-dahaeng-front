import { takeLatest } from 'redux-saga/effects';
import { GETUSER } from 'store/user';
import * as authApi from 'api/auth';
import createRequestSaga from './createSaga';

const getUserSaga = createRequestSaga(GETUSER, authApi.getUser);

export function* userSaga() {
  yield takeLatest(GETUSER, getUserSaga);
}
