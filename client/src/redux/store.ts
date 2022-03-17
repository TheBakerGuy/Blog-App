import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import recipesSlice from './reducers/recipesSlice';
import modals from './reducers/modalSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipes: recipesSlice,
    modals,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
