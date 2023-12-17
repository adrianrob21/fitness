import { put, select } from 'redux-saga/effects';

import { Api } from 'Api';
import { WORKOUTS } from 'Repos';

import { appSliceTypes } from 'Reducers/appSlice';
import { trainingsSelector, trainingsSliceTypes } from 'Reducers/trainingsSlice';

export const getDayWorkouts = function* ({ payload }) {
  yield put({
    type: Api.apiType,
    actions: {
      success: {
        type: appSliceTypes.getDocumentsSuccess,
        keyToUpdate: 'workouts',
        path: 'dayWorkouts'
      },
      options: {
        loading: {
          key: 'processing'
        }
      },
      fail: { type: appSliceTypes.requestFail }
    },
    promise: Api.queries.getDayWorkouts({
      collectionPath: WORKOUTS,
      date: payload?.selectedDate
    })
  });
};

export const updateExercise = function* ({ payload }) {
  yield put({
    type: Api.apiType,
    actions: {
      success: { type: trainingsSliceTypes.updateExerciseSuccess },
      options: {
        loading: {
          key: 'processingExerciseUpdate'
        }
      },
      fail: { type: appSliceTypes.requestFail }
    },
    promise: Api.queries.updateExercise({
      collectionPath: WORKOUTS,
      docId: payload.docId,
      body: payload.body
    })
  });
};

export const updateExerciseSuccess = function* () {
  const state = yield select(trainingsSelector);
  const selectedDate = state?.selectedDate;

  yield put({ type: trainingsSliceTypes.deleteKey, key: 'inProgress' });
  yield put({ type: trainingsSliceTypes.deleteKey, key: 'exerciseCount' });
  yield put({
    type: trainingsSliceTypes.getDayWorkouts,
    payload: { selectedDate }
  });
};
