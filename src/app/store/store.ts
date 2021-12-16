import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
<<<<<<< HEAD:src/app/store.ts
import lineChartReducer from '../features/lineChart/lineChartSlice';
import headerDataReducer from '../features/Header/Header'
=======
import lineChartReducer from '../components/lineChart/lineChartSlice';
import barChartReducer from '../components/barChart/barChartSlice';
>>>>>>> 09ece72c86aaefa5580fcf37145c3bc133a675d0:src/app/store/store.ts

export const store = configureStore({
  reducer: {
    lineChartData: lineChartReducer,
<<<<<<< HEAD:src/app/store.ts
    headerData: headerDataReducer,
=======
    barChartData: barChartReducer,
>>>>>>> 09ece72c86aaefa5580fcf37145c3bc133a675d0:src/app/store/store.ts
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
