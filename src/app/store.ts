import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lineChartReducer from '../features/lineChart/lineChartSlice';
import barChartReducer from '../features/barChart/barChartSlice';

export const store = configureStore({
  reducer: {
    lineChartData: lineChartReducer,
    barChartData: barChartReducer,
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
