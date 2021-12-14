import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lineChartReducer from '../features/lineChart/lineChartSlice';
import verticalChartReducer from '../features/verticalChart/verticalChartSlice';

export const store = configureStore({
  reducer: {
    lineChartData: lineChartReducer,
    verticalChartData: verticalChartReducer,
    // headerData: ...
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
