import { v4 as randomKey } from 'uuid';
import { put, select } from 'redux-saga/effects';

import { Api } from 'Api';
import { userSelector } from 'Reducers/userSlice';
import { appSliceTypes } from 'Reducers/appSlice';
import { mediaSliceTypes } from 'Reducers/mediaSlice';

export const uploadFile = function* ({ payload }) {
  const user = yield select(userSelector);

  const { folderName, image, imageName } = payload || {};

  yield put({
    type: Api.apiType,
    actions: {
      success: { type: mediaSliceTypes.uploadFileSuccess },
      fail: { type: appSliceTypes.requestFail }
    },
    promise: Api.queries.uploadFile({
      folderName,
      image,
      userId: user.userId,
      imageName
    })
  });
};

export const uploadFileSuccess = function* () {
  yield console.log('Photo uploaded');
};

export const getMediaURL = function* ({ payload }) {
  const { fileName, folderName, userId, fileExtension } = payload || {};

  yield put({
    type: Api.apiType,
    actions: {
      success: { type: mediaSliceTypes.getMediaURLSuccess, date: fileName },
      fail: { type: appSliceTypes.requestFail }
    },
    promise: Api.queries.getMediaURL({ fileName, folderName, userId, fileExtension })
  });
};

export const getMediaURLSuccess = function* ({ date, payload }) {
  const user = yield select(userSelector);

  yield put({
    type: appSliceTypes.createDocument,
    payload: {
      collection: 'bodyPhotos',
      data: { userId: user.userId, url: payload, id: randomKey(), date },
      successMessage: 'Your photo was successfuly uploaded',
      processingKey: 'processingFile'
    }
  });
};
