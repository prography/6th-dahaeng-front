import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { REMINDER, REMINDER_SUCCESS, REMINDER_FAIL } from 'store/user';
import { GETITEMS, GETITEMS_SUCCESS, GETITEMS_FAIL } from 'store/user';
import { BUYITEMS, BUYITEMS_SUCCESS, BUYITEMS_FAIL } from 'store/user';
import { SETITEMS, SETITEMS_SUCCESS, SETITEMS_FAIL } from 'store/user';
import { GETCLOSET, GETCLOSET_SUCCESS, GETCLOSET_FAIL } from 'store/user';
import { GETUSER, GETUSER_SUCCESS, GETUSER_FAIL } from 'store/user';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { serverURL } from './index';

//const profile_id = useSelector((state) => state.auth.profile_id);
//const getUserSaga = createRequestSaga(GETUSER, authApi.getUser);
// function* getUserSaga(action) {
//   try {
//     //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

//     // const res = yield call(authApi.create, action.payload);
//     //api.login(action.payload)와 같다

//     const headers = {
//       Authorization: `jwt ${localStorage.getItem('accessToken')}`,
//     };

//     const res = yield call(
//       [axios, 'get'],
//       `http://ec2-15-164-55-163.ap-northeast-2.compute.amazonaws.com:7878/profile/${profile_id}`,
//       { headers: headers },
//     );

//     console.log('response: ', res);
//     if (res.response === 'success') {
//       yield put({
//         type: REMINDER_SUCCESS,
//         payload: res.data.message,
//       });
//     } else {
//       yield put({
//         type: REMINDER_FAIL,
//         payload: res.data.message,
//         error: true,
//       });
//     }
//   } catch (e) {
//     yield put({
//       type: REMINDER_FAIL,
//       payload: e,
//       error: true,
//     });
//   }
// }

function* getUserSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };
    const res = yield call(
      [axios, 'get'],
      `${serverURL}/profile/${action.payload.id}/`,
      {
        headers: headers,
      },
    );

    console.log('getUser: ', res);
    if (res.data.response === 'success') {
      yield put({
        type: GETUSER_SUCCESS,
        payload: res.data.message,
      });
    } else {
      yield put({
        type: GETUSER_FAIL,
        payload: res.data.message,
        error: true,
      });
    }
  } catch (e) {
    yield put({
      type: GETUSER_FAIL,
      payload: e,
      error: true,
    });
  }
}

function* reminderSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    console.log('rminder');
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };
    const res = yield call([axios, 'get'], `${serverURL}/notice/reminder/`, {
      headers: headers,
    });

    console.log('response: ', res);
    if (res.data.response === 'success') {
      yield put({
        type: REMINDER_SUCCESS,
        payload: res.data,
      });
    } else {
      yield put({
        type: REMINDER_FAIL,
        payload: res.data,
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
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };
    const res = yield call([axios, 'get'], `${serverURL}/shop/`, {
      headers: headers,
    });

    console.log('response: ', res);
    yield put({
      type: GETITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    yield put({
      type: GETITEMS_FAIL,
      payload: e,
      error: true,
    });
  }
}

function* buyItemSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    console.log('getItmes');
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    const param = {
      item: action.payload.item,
    };

    const res = yield call(
      [axios, 'post'],
      `${serverURL}/shop/${param.item}`,
      { headers: headers },
      param,
    );

    console.log('response: ', res);
    if (res.response === 'success') {
      yield put({
        type: BUYITEMS_SUCCESS,
        payload: res.data.message,
      });
    } else {
      yield put({
        type: BUYITEMS_FAIL,
        payload: res.data.message,
        error: true,
      });
    }
  } catch (e) {
    yield put({
      type: BUYITEMS_FAIL,
      payload: e,
      error: true,
    });
  }
}

function* setItemSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    console.log('getItmes');
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    const param = {
      id: action.payload.item,
    };

    const res = yield call(
      [axios, 'post'],
      `${serverURL}/shop/mycloset/`,
      { headers: headers },
      param,
    );

    console.log('response: ', res);
    if (res.response === 'success') {
      yield put({
        type: SETITEMS_SUCCESS,
        payload: res.data.message,
      });
    } else {
      yield put({
        type: SETITEMS_FAIL,
        payload: res.data.message,
        error: true,
      });
    }
  } catch (e) {
    yield put({
      type: SETITEMS_FAIL,
      payload: e,
      error: true,
    });
  }
}

function* getClosetSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    console.log('getItmes');
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    // const param = {
    //   id: action.payload.item,
    // };

    const res = yield call(
      [axios, 'get'],
      `${serverURL}/shop/mycloset/`,
      { headers: headers },
      // param,
    );

    console.log('response: ', res);
    yield put({
      type: GETCLOSET_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    yield put({
      type: GETCLOSET_FAIL,
      payload: e,
      error: true,
    });
  }
}

export function* userSaga() {
  yield takeLatest(GETUSER, getUserSaga);
  yield takeLatest(REMINDER, reminderSaga);
  yield takeLatest(GETITEMS, getItemSaga);
  yield takeLatest(BUYITEMS, buyItemSaga);
  yield takeLatest(SETITEMS, setItemSaga);
  yield takeLatest(SETITEMS, setItemSaga);
  yield takeLatest(GETCLOSET, getClosetSaga);
}
