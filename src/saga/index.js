import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth';
import { userSaga } from './user';
import { boxSaga } from './box';

export const serverURL =
  // 'http://dahaengbackend-dev.ap-northeast-2.elasticbeanstalk.com';
  'http://ec2-3-34-177-77.ap-northeast-2.compute.amazonaws.com:8000';

export default function* rootSaga() {
  //all: 여러 사가를 합쳐줌
  yield all([fork(authSaga), fork(userSaga), fork(boxSaga)]);
}
