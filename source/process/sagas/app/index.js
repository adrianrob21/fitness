import { put } from 'redux-saga/effects';

import { Api } from 'Api';
import I18n from 'Translations';
import { appSliceTypes } from 'Reducers/appSlice';
import { growlSliceTypes } from 'Reducers/growlSlice';
import { transientSliceTypes } from 'Reducers/transientSlice';

import { updateStateKey } from 'Helpers';

export const createDocument = function* ({ payload }) {
  yield put({
    type: Api.apiType,
    actions: {
      success: {
        type: appSliceTypes.requestSuccess,
        message: payload.successMessage
      },
      fail: { type: appSliceTypes.requestFail }
    },
    promise: Api.createDocument({
      collectionPath: payload.collection,
      data: payload.data
    })
  });
};

export const requestFail = function* ({ processingKey, payload }) {
  const code = payload?.code?.split('/')[1] || '';

  const growl = {
    growlType: 'error',
    message: I18n.t([`errors:${code}`, 'errors:somethingWentWrong'])
  };

  yield put({ type: growlSliceTypes.callGrowl, payload: growl });
  if (processingKey) {
    yield put({ type: transientSliceTypes.deleteKey, key: processingKey });
  }
};

export const requestSuccess = function* ({ message = '' }) {
  const growl = {
    growlType: 'success',
    message
  };

  yield put({ type: growlSliceTypes.callGrowl, payload: growl });
};

export const getDocuments = function* ({ payload }) {
  yield put({
    type: Api.apiType,
    actions: {
      success: {
        type: appSliceTypes.getDocumentsSuccess,
        path: payload.collectionPath,
        keyToUpdate: payload.keyToUpdate
      },
      options: {
        loading: {
          key: payload.processingKey || 'processing'
        }
      },
      fail: { type: appSliceTypes.requestFail }
    },
    promise: Api.getDocuments({
      collectionPath: payload.collectionPath
    })
  });
};

export const getDocumentsSuccess = function* ({ payload, path, keyToUpdate }) {
  const data = [];

  payload?.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() });
  });

  yield put(updateStateKey(path, keyToUpdate, data));
};
