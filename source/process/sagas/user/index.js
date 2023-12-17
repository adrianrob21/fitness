import { put, select, call } from 'redux-saga/effects';

import { Api } from 'Api';
import { USERS } from 'Repos';
import { appSliceTypes } from 'Reducers/appSlice';
import { userSliceTypes } from 'Reducers/userSlice';
import { transientSelector } from 'Reducers/transientSlice';

export const register = function* ({ payload }) {
  const processingKey = 'processing';

  yield put({
    type: Api.apiType,
    actions: {
      success: { type: userSliceTypes.registerSuccess },
      options: {
        loading: {
          key: processingKey,
          handleFinishLoading: false
        }
      },
      fail: { type: appSliceTypes.requestFail, processingKey }
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
  if (transient?.profileImage) {
    yield put({
      type: userSliceTypes.uploadProfilePicture,
      userId: payload.user.uid
    });
  }

  yield put({
    type: userSliceTypes.updateProps,
    payload: {
      email: payload.user.email,
      userId: payload.user.uid,
      ...(!transient?.profileImage && { userSession: true })
    }
  });
};

export const uploadProfilePicture = function* ({ userId }) {
  const transient = yield select(transientSelector);
  const image = transient?.profileImage;

  yield put({
    type: Api.apiType,
    actions: {
      success: { type: userSliceTypes.uploadProfilePictureSuccess },
      fail: { type: appSliceTypes.requestFail }
    },
    promise: Api.queries.uploadFile({
      folderName: 'profileImages',
      image,
      userId
    })
  });
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
      fail: { type: appSliceTypes.requestFail }
    },
    promise: Api.login({ email: payload.email, password: payload.password })
  });
};

export const getProfilePicture = function* ({ payload }) {
  yield put({
    type: Api.apiType,
    actions: {
      success: {
        type: userSliceTypes.getProfilePictureSuccess
      },
      options: {
        loading: { key: 'processingProfilePicture' }
      },
      fail: { type: appSliceTypes.requestFail }
    },
    promise: Api.queries.getProfilePicture(payload)
  });
};

export const logout = function* () {
  yield put({
    type: Api.apiType,
    actions: {
      success: { type: 'RESET_STATE' },
      fail: { type: appSliceTypes.requestFail }
    },
    promise: Api.logout()
  });
};
