import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth';
import { userSaga } from './user';
import { boxSaga } from './box';

export const serverURL =
  'http://ec2-15-165-219-116.ap-northeast-2.compute.amazonaws.com/';

export default function* rootSaga() {
  //all: 여러 사가를 합쳐줌
  yield all([fork(authSaga), fork(userSaga), fork(boxSaga)]);
}
