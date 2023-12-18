import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import * as auth from '../../features/auth'

export const store = configureStore({
  reducer: {
    auth: auth.reducer
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
