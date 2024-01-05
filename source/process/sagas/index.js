import { all, takeLatest } from 'redux-saga/effects';

import { appSliceTypes } from 'Reducers/appSlice';
import { userSliceTypes } from 'Reducers/userSlice';
import { mediaSliceTypes } from 'Reducers/mediaSlice';
import { trainingsSliceTypes } from 'Reducers/trainingsSlice';

import {
  getProfilePicture,
  login,
  logout,
  register,
  registerSuccess,
  uploadProfilePicture
} from './user';
import {
  createDocument,
  getDocuments,
  getDocumentsSuccess,
  requestFail,
  requestSuccess
} from './app';
import { getDayWorkouts, updateExercise, updateExerciseSuccess } from './trainings';
import { getMediaURL, getMediaURLSuccess, uploadFile, uploadFileSuccess } from './media';

export default function* rootSaga() {
  yield all([
    //APP SLICE
    takeLatest(appSliceTypes.createDocument, createDocument),
    takeLatest(appSliceTypes.getDocuments, getDocuments),
    takeLatest(appSliceTypes.requestFail, requestFail),
    takeLatest(appSliceTypes.requestSuccess, requestSuccess),
    takeLatest(appSliceTypes.getDocumentsSuccess, getDocumentsSuccess),

    //MEDIA SLICE
    takeLatest(mediaSliceTypes.getMediaURL, getMediaURL),
    takeLatest(mediaSliceTypes.getMediaURLSuccess, getMediaURLSuccess),
    takeLatest(mediaSliceTypes.uploadFile, uploadFile),
    takeLatest(mediaSliceTypes.uploadFileSuccess, uploadFileSuccess),

    //TRAININGS SLICE
    takeLatest(trainingsSliceTypes.getDayWorkouts, getDayWorkouts),
    takeLatest(trainingsSliceTypes.updateExercise, updateExercise),
    takeLatest(trainingsSliceTypes.updateExerciseSuccess, updateExerciseSuccess),

    //USER SLICE
    takeLatest(userSliceTypes.getProfilePicture, getProfilePicture),
    takeLatest(userSliceTypes.login, login),
    takeLatest(userSliceTypes.logout, logout),
    takeLatest(userSliceTypes.register, register),
    takeLatest(userSliceTypes.registerSuccess, registerSuccess),
    takeLatest(userSliceTypes.uploadProfilePicture, uploadProfilePicture)
  ]);
}
