// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import stockSlice from "./stockSlice";

const persistConfig = {
  key: 'root',
  storage,
  // You can add more configurations here
};

const persistedReducer = persistReducer(persistConfig, stockSlice);

export const store = configureStore({
  reducer: {
    stock: persistedReducer,
  },
});

export const persistor = persistStore(store);
