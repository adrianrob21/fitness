import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import rootSaga from "Sagas";
import Middlewares from "Middlewares";
import { transientSlice } from "Reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  transientSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }).concat(Middlewares.apiMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
