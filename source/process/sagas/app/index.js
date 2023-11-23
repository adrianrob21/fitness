import { put } from 'redux-saga/effects';
import { Api } from 'Api';

import { appSliceTypes } from 'Reducers/appSlice';

export const createDocument = function* ({ payload }) {
  yield console.log(payload);
  yield put({
    type: Api.apiType,
    actions: {
      success: { type: appSliceTypes.createDocumentSuccess },
      fail: { type: appSliceTypes.createDocumentFail }
    },
    promise: Api.createDocument({
      collectionPath: payload.collection,
      data: payload.data
    })
  });
};

export const createDocumentFail = function* () {
  yield alert('User not created...');
};

export const createDocumentSuccess = function* () {
  yield alert('User created!');
};
