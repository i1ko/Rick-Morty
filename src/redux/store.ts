import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import reducerTodos from "./reducers/reducerTodos";
import reducerModal from './reducers/reducerModal';

const rootReducer = combineReducers({
  reducerTodos,
  reducerModal,
})

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
