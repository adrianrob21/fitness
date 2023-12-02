import { put } from 'redux-saga/effects';
import { Api } from 'Api';

import { appSliceTypes } from 'Reducers/appSlice';
import { planningSliceTypes } from 'Reducers/planningSlice';
import { trainingsSliceTypes } from 'Reducers/trainingsSlice';

export const createDocument = function* ({ payload }) {
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

export const getDocuments = function* ({ payload }) {
  yield put({
    type: Api.apiType,
    actions: {
      success: {
        type: appSliceTypes.getDocumentsSuccess,
        path: payload.collectionPath
      },
      fail: { type: appSliceTypes.getDocumentsFail }
    },
    promise: Api.getDocuments({
      collectionPath: payload.collectionPath
    })
  });
};

const updateKey = (repo, keyToUpdate, data) => {
  const keys = {
    workouts: { type: planningSliceTypes.updateProps, payload: { [keyToUpdate]: data } }
  };

  return keys[repo];
};

export const getDocumentsSuccess = function* ({ payload, path }) {
  const data = [];

  payload?.forEach(doc => {
    data.push(doc.data());
  });

  yield put(updateKey(path, 'plannedWorkouts', data));
};

export const getDocumentsFail = function* () {
  yield alert('There was an error');
};
