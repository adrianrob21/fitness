import { all, takeLatest } from "redux-saga/effects";

import { counterSliceTypes } from "Reducers/counterSlice";

import { increment } from "./counter";

export default function* rootSaga() {
  yield all([takeLatest(counterSliceTypes.increment, increment)]);
}
