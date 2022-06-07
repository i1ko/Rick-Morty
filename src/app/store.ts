import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import reducerTodos from "./reducerTodos";
import reducerModal from './reducerModal';

const rootReducer = combineReducers({
  todoState: reducerTodos,
  modalState: reducerModal,
})

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
