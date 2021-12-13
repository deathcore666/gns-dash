import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBarCharData } from './barChartAPI';
import { RootState } from '../../app/store';

export interface BarChartState {
  data: [{ name: string, count: number }] | [];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BarChartState = {
  data: [{ name: 'N/A', count: 0 }],
  status: 'idle'
}

export const fetchBarChartDataAsync = createAsyncThunk(
    'barChart/fetchData',
    async () => {
      const response = await fetchBarCharData();
      return response.data;
    }
);

export const barChartSlice = createSlice({
  name: 'barChart',

  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    clearData: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchBarChartDataAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchBarChartDataAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.data = action.payload;
        })
        .addCase(fetchBarChartDataAsync.rejected, (state) => {
          state.status = 'failed';
        })
  },
});

export const { setData, clearData } = barChartSlice.actions;
export const selectBarChartData = (state: RootState) => state.barChartData.data;
export default barChartSlice.reducer;
