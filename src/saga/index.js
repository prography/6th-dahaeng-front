import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth';
import { userSaga } from './user';
import { boxSaga } from './box';

export const serverURL =
  'http://dahaengbackend-dev.ap-northeast-2.elasticbeanstalk.com';

export default function* rootSaga() {
  //all: 여러 사가를 합쳐줌
  yield all([fork(authSaga), fork(userSaga), fork(boxSaga)]);
}
