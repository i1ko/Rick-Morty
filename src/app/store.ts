import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import reducerTodos from "./reducerTodos";
import {initialState} from "./initialState";

export const store = configureStore({
  reducer: reducerTodos,
  preloadedState: initialState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
