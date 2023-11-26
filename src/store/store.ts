import { configureStore } from "@reduxjs/toolkit";
import { fakestoreReducer } from "./fakestore/fakestore.slice";
import { baseApi } from "../services/setup";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    fakestore: fakestoreReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>