import { all, takeLatest } from 'redux-saga/effects';

import { appSliceTypes } from 'Reducers/appSlice';
import { userSliceTypes } from 'Reducers/userSlice';
import { trainingsSliceTypes } from 'Reducers/trainingsSlice';

import {
  getDayWorkouts,
  getDayWorkoutsFail,
  getDayWorkoutsSuccess,
  updateExercise,
  updateExerciseFail,
  updateExerciseSuccess
} from './trainings';
import {
  getProfilePicture,
  login,
  loginFail,
  loginSuccess,
  logout,
  logoutFail,
  register,
  registerFail,
  registerSuccess,
  uploadProfilePicture
} from './user';
import {
  createDocument,
  createDocumentFail,
  createDocumentSuccess,
  getDocuments,
  getDocumentsFail,
  getDocumentsSuccess
} from './app';

export default function* rootSaga() {
  yield all([
    //APP SLICE
    takeLatest(appSliceTypes.createDocument, createDocument),
    takeLatest(appSliceTypes.createDocumentFail, createDocumentFail),
    takeLatest(appSliceTypes.createDocumentSuccess, createDocumentSuccess),
    takeLatest(appSliceTypes.getDocuments, getDocuments),
    takeLatest(appSliceTypes.getDocumentsFail, getDocumentsFail),
    takeLatest(appSliceTypes.getDocumentsSuccess, getDocumentsSuccess),

    //TRAININGS SLICE
    takeLatest(trainingsSliceTypes.getDayWorkouts, getDayWorkouts),
    takeLatest(trainingsSliceTypes.getDayWorkoutsFail, getDayWorkoutsFail),
    takeLatest(trainingsSliceTypes.getDayWorkoutsSuccess, getDayWorkoutsSuccess),
    takeLatest(trainingsSliceTypes.updateExercise, updateExercise),
    takeLatest(trainingsSliceTypes.updateExerciseFail, updateExerciseFail),
    takeLatest(trainingsSliceTypes.updateExerciseSuccess, updateExerciseSuccess),

    //USER SLICE
    takeLatest(userSliceTypes.login, login),
    takeLatest(userSliceTypes.loginFail, loginFail),
    takeLatest(userSliceTypes.loginSuccess, loginSuccess),
    takeLatest(userSliceTypes.logout, logout),
    takeLatest(userSliceTypes.logoutFail, logoutFail),
    takeLatest(userSliceTypes.register, register),
    takeLatest(userSliceTypes.registerFail, registerFail),
    takeLatest(userSliceTypes.registerSuccess, registerSuccess),
    takeLatest(userSliceTypes.uploadProfilePicture, uploadProfilePicture),
    takeLatest(userSliceTypes.getProfilePicture, getProfilePicture)
  ]);
}
