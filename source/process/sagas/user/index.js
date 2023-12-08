import { put, select } from 'redux-saga/effects';

import { Api } from 'Api';
import { USERS } from 'Repos';
import I18n from 'Translations';
import { appSliceTypes } from 'Reducers/appSlice';
import { userSliceTypes } from 'Reducers/userSlice';
import { growlSliceTypes } from 'Reducers/growlSlice';
import { transientSelector } from 'Reducers/transientSlice';

export const register = function* ({ payload }) {
  yield put({
    type: Api.apiType,
    actions: {
      success: { type: userSliceTypes.registerSuccess },
      options: {
        loading: {
          key: 'processing'
        }
      },
      fail: { type: userSliceTypes.registerFail }
    },
    promise: Api.register({ email: payload.email, password: payload.password })
  });
};

export const registerSuccess = function* ({ payload }) {
  const transient = yield select(transientSelector);

  const data = {
    fullname: transient.fullname.value,
    username: transient.username.value,
    email: transient.email.value,
    userId: payload.user.uid
  };

  yield put({
    type: appSliceTypes.createDocument,
    payload: {
      collection: USERS,
      data
    }
  });

  yield put({
    type: userSliceTypes.updateProps,
    payload: {
      email: payload.user.email,
      userId: payload.user.uid,
      userSession: true
    }
  });
};

export const registerFail = function* ({ payload }) {
  const code = payload?.code?.split('/')[1];

  const growl = {
    growlType: 'error',
    message: I18n.t(`errors:${code}`)
  };

  yield put({ type: growlSliceTypes.callGrowl, payload: growl });
};

export const login = function* ({ payload }) {
  yield put({
    type: Api.apiType,
    actions: {
      success: { type: userSliceTypes.loginSuccess },
      options: {
        loading: {
          key: 'processing'
        }
      },
      fail: { type: userSliceTypes.loginFail }
    },
    promise: Api.login({ email: payload.email, password: payload.password })
  });
};

export const loginSuccess = function* ({ payload }) {
  yield put({
    type: userSliceTypes.updateProps,
    payload: {
      email: payload.user.email,
      userId: payload.user.uid,
      userSession: true
    }
  });
};

export const loginFail = function* ({ payload }) {
  const code = payload?.code?.split('/')[1];

  const growl = {
    growlType: 'error',
    message: I18n.t(`errors:${code}`)
  };

  yield put({ type: growlSliceTypes.callGrowl, payload: growl });
};

export const logout = function* () {
  yield put({
    type: Api.apiType,
    actions: {
      success: { type: 'RESET_STATE' },
      options: {
        loading: {
          key: 'processing'
        }
      },
      fail: { type: userSliceTypes.logoutFail }
    },
    promise: Api.logout()
  });
};

export const logoutFail = function* ({ payload }) {
  const code = payload?.code?.split('/')[1];

  yield alert(I18n.t(`errors:${code}`));
};
