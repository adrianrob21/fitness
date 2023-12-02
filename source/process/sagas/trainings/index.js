import { put } from 'redux-saga/effects';

import { Api } from 'Api';
import { WORKOUTS } from 'Repos';

import { trainingsSliceTypes } from 'Reducers/trainingsSlice';

export const getDayWorkouts = function* ({ payload }) {
  yield put({
    type: Api.apiType,
    actions: {
      success: { type: trainingsSliceTypes.getDayWorkoutsSuccess },
      options: {
        loading: {
          key: 'processing'
        }
      },
      fail: { type: trainingsSliceTypes.getDayWorkoutsFail }
    },
    promise: Api.queries.getDayWorkouts({
      collectionPath: WORKOUTS,
      date: payload.selectedDate
    })
  });
};

export const getDayWorkoutsSuccess = function* ({ payload }) {
  const data = [];

  payload?.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() });
  });

  yield put({ type: trainingsSliceTypes.updateProps, payload: { workouts: data } });
};

export const getDayWorkoutsFail = function* () {
  yield console.log('Failed');
};
