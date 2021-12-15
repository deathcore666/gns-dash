import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lineChartReducer from '../features/lineChart/lineChartSlice';
import headerDataReducer from '../features/Header/Header'

export const store = configureStore({
  reducer: {
    lineChartData: lineChartReducer,
    headerData: headerDataReducer,
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
