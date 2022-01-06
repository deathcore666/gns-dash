import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lineChartReducer from '../components/lineChart/lineChartSlice';
import barChartReducer from '../components/barChart/barChartSlice';
import userReducer from '../components/profile/userSlice';

export const store = configureStore({
  reducer: {
    lineChartData: lineChartReducer,
    barChartData: barChartReducer,
    user: userReducer,
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
