import { all } from 'redux-saga/effects';
import { authSaga } from './auth';
import { userSaga } from './user';

export default function* rootSaga() {
  //all: 여러 사가를 합쳐줌
  yield all([authSaga(), userSaga()]);
}