import { all, takeLatest } from 'redux-saga/effects';

import { appSliceTypes } from 'Reducers/appSlice';
import { userSliceTypes } from 'Reducers/userSlice';

import {
  register,
  registerSuccess,
  registerFail,
  login,
  loginSuccess,
  loginFail,
  logout,
  logoutFail
} from './user';
import { createDocument, createDocumentFail, createDocumentSuccess } from './app';

export default function* rootSaga() {
  yield all([
    //APP SLICE
    takeLatest(appSliceTypes.createDocument, createDocument),
    takeLatest(appSliceTypes.createDocumentFail, createDocumentFail),
    takeLatest(appSliceTypes.createDocumentSuccess, createDocumentSuccess),

    //USER SLICE
    takeLatest(userSliceTypes.login, login),
    takeLatest(userSliceTypes.loginFail, loginFail),
    takeLatest(userSliceTypes.loginSuccess, loginSuccess),
    takeLatest(userSliceTypes.logout, logout),
    takeLatest(userSliceTypes.logoutFail, logoutFail),
    takeLatest(userSliceTypes.register, register),
    takeLatest(userSliceTypes.registerFail, registerFail),
    takeLatest(userSliceTypes.registerSuccess, registerSuccess)
  ]);
}
