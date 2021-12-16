import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchEDeclarationData } from '../../api/eDeclaration';
import { RootState } from '../../store/store';
import { BarChartDataInterface } from "../../shared/interfaces/barChartDataInterface";

export interface BarChartState {
  data: BarChartDataInterface;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BarChartState = {
  data: {
    labels: ['N/A'],
    datasets: [{
      label: 'N/A',
      data: [1],
      borderColor: 'rgb(0,0,0)',
      backgroundColor: 'rgb(0,0,0)',
    }]
  },
  status: 'idle'
}
// generic function todo
export const fetchBarChartDataAsync = createAsyncThunk(
    'barChart/fetchData',
    async (): Promise<BarChartDataInterface> => {
      return await fetchEDeclarationData();
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
      state.data = {
        labels: ['N/A'],
        datasets: [{
          label: 'N/A',
          data: [1],
          borderColor: 'rgb(0,0,0)',
          backgroundColor: 'rgb(0,0,0)',
        }]
      };
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
export const selectBarChartStatus = (state: RootState) => state.barChartData.status;
export default barChartSlice.reducer;
