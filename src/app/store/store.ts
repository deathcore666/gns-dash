import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lineChartReducer from '../components/lineChart/lineChartSlice';

export const store = configureStore({
  reducer: {
    lineChartData: lineChartReducer,
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
