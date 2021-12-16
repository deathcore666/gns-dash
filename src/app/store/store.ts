import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import headerDataReducer from '../components/Header/Header'
import lineChartReducer from '../components/lineChart/lineChartSlice';
import barChartReducer from '../components/barChart/barChartSlice';

export const store = configureStore({
  reducer: {
    lineChartData: lineChartReducer,
    headerData: headerDataReducer,
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
