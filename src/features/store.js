import { combineReducers, configureStore } from "@reduxjs/toolkit";

import messageSlice from './slices/startSlice';
import holidaysSlice from "./slices/holidaysSlice";
//persist
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  user: messageSlice,
  holidays: holidaysSlice
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
