import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lineChartReducer from '../components/lineChart/lineChartSlice';
import barChartReducer from '../components/barChart/barChartSlice';

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
