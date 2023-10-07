import { put } from "redux-saga/effects";

import { Api } from "Api";
import Repos from "Repos";
import { counterSliceTypes } from "Reducers/counterSlice";

export const increment = function* () {
  yield put({
    type: Api.apiType,
    actions: {
      success: { type: counterSliceTypes.resetCounter },
      fail: { type: counterSliceTypes.decrement },
    },
    promise: Repos.pokemon.getPokemon(),
  });
};
