import { call, put, takeLatest } from 'redux-saga/effects';
import { REMINDER, REMINDER_SUCCESS, REMINDER_FAIL } from 'store/user';
import { NOTICE, NOTICE_SUCCESS, NOTICE_FAIL } from 'store/user';
import { GETITEMS, GETITEMS_SUCCESS, GETITEMS_FAIL } from 'store/user';
import { BUYITEMS, BUYITEMS_SUCCESS, BUYITEMS_FAIL } from 'store/user';
import { SETITEMS, SETITEMS_SUCCESS, SETITEMS_FAIL } from 'store/user';
import { GETCLOSET, GETCLOSET_SUCCESS, GETCLOSET_FAIL } from 'store/user';
import { GETUSER, GETUSER_SUCCESS, GETUSER_FAIL } from 'store/user';
import { SETUSER, SETUSER_SUCCESS, SETUSER_FAIL } from 'store/user';
import { FEEDBACK, FEEDBACK_SUCCESS, FEEDBACK_FAIL } from 'store/user';
import axios from 'axios';
import { serverURL } from './index';

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
      const backgroundItems = res.data.message.jorang_items.filter(
        (item) => item.item.item_type === 'background',
      );
      console.log(backgroundItems);
      const etcItems = res.data.message.jorang_items.filter(
        (item) => item.item.item_type === 'etc',
      );
      const items = {
        background:
          backgroundItems.length !== 0
            ? backgroundItems[0].item.item_detail
            : null,
        etc: etcItems.length !== 0 ? etcItems[0].item.item_detail : null,
      };
      yield put({
        type: GETUSER_SUCCESS,
        payload: {
          user: res.data.message,
          jorang_color: res.data.message.jorang_items.filter(
            (item) => item.item.item_type === 'jorang_color',
          )[0].item.item_detail,
          jorang_items: items,
        },
      });
    } else {
      yield put({
        type: GETUSER_FAIL,
        payload: res.data.message,
        error: true,
      });
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: GETUSER_FAIL,
      payload: e,
      error: true,
    });
  }
}
//OK
function* setUserSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    const param = {
      title: action.payload.title,
      nickname: action.payload.nickname,
    };
    const res = yield call(
      [axios, 'post'],
      `${serverURL}/profile/${action.payload.id}/`,
      param,
      {
        headers: headers,
      },
    );

    console.log('getUser: ', res);
    if (res.data.response === 'success') {
      yield put({
        type: SETUSER_SUCCESS,
        payload: res.data.message,
      });
    } else {
      yield put({
        type: SETUSER_FAIL,
        payload: res.data.message,
        error: true,
      });
    }
  } catch (e) {
    yield put({
      type: SETUSER_FAIL,
      payload: e,
      error: true,
    });
  }
}

function* reminderSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

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
//OK
function* getItemSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    console.log('getItmes');
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };
    const res = yield call([axios, 'get'], `${serverURL}/shop/item/user/`, {
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
//OK
function* buyItemSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    const param = {
      item: action.payload.id,
    };

    const res = yield call(
      [axios, 'post'],
      `${serverURL}/shop/item/buy/`,
      param,
      { headers: headers },
    );

    console.log('response: ', res);
    if (res.data.response === 'success') {
      yield put({
        type: BUYITEMS_SUCCESS,
        payload: res.data.coin,
      });
    } else {
      yield put({
        type: BUYITEMS_FAIL,
        payload: res.data.message,
      });
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: BUYITEMS_FAIL,
      payload: e,
      error: true,
    });
  }
}
//OK
function* setItemSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다

    console.log('getItmes');
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    const param = {
      item: action.payload.id,
    };

    const res = yield call(
      [axios, 'post'],
      `${serverURL}/shop/mycloset/`,
      param,
      { headers: headers },
    );

    console.log('response: ', res);
    if (res.data.response === 'success') {
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
    console.log(e);
    yield put({
      type: SETITEMS_FAIL,
      payload: e,
      error: true,
    });
  }
}
//OK
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
function* feedbackSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };

    const param = {
      // feedback: {
      //   feedback: action.payload.content,
      // },
      feedback: action.payload.content,
    };

    const res = yield call([axios, 'post'], `${serverURL}/feedback/`, param, {
      headers: headers,
    });

    console.log('response: ', res);
    if (res.response === 'success') {
      yield put({
        type: FEEDBACK_SUCCESS,
        payload: res.data.message,
      });
    } else {
      yield put({
        type: FEEDBACK_FAIL,
        payload: res.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: FEEDBACK_FAIL,
      payload: e,
    });
  }
}
function* noticeSaga(action) {
  try {
    //call: Promise를 반환하는 함수 호출하고 기다림 (함수, 해당 함수에 넣을 인수)

    // const res = yield call(authApi.create, action.payload); //api.login(action.payload)와 같다
    const headers = {
      Authorization: `jwt ${localStorage.getItem('accessToken')}`,
    };
    const res = yield call([axios, 'get'], `${serverURL}/notice/`, {
      headers: headers,
    });

    console.log('response: ', res);
    if (res.response === 'success') {
      yield put({
        type: NOTICE_SUCCESS,
        payload: res.data.message,
      });
    } else {
      yield put({
        type: NOTICE_FAIL,
        payload: res.data.message,
      });
    }
  } catch (e) {
    yield put({
      type: NOTICE_FAIL,
      payload: e,
    });
  }
}

export function* userSaga() {
  yield takeLatest(GETUSER, getUserSaga);
  yield takeLatest(REMINDER, reminderSaga);
  yield takeLatest(GETITEMS, getItemSaga);
  yield takeLatest(BUYITEMS, buyItemSaga);
  yield takeLatest(SETITEMS, setItemSaga);
  yield takeLatest(GETCLOSET, getClosetSaga);
  yield takeLatest(SETUSER, setUserSaga);
  yield takeLatest(FEEDBACK, feedbackSaga);
  yield takeLatest(NOTICE, noticeSaga);
}
