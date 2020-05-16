import { call, put } from 'redux-saga/effects';

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAIL = `${type}_FAIL`;

  return function* (action) {
    //   try {
    //     //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)
    //     const response = yield call(request, action.payload); //api.login(action.payload)와 같다
    //     yield put({
    //         type: SUCCESS,
    //         payload: response.data
    //     });
    //   } catch(e){
    //     yield put({
    //         type: FAIL,
    //         payload: e,
    //         error: true
    //     });
    //   }
  };
}
