import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import styles from './Header.module.css';


export interface HeaderDataState {
  data: {title: string};
  status: 'idle' | 'loading' | 'failed';
}
const initialState: HeaderDataState = {
  data: {title: 'Аналитическая система ГНС'},
  status: 'idle',
};


export const headerDataSlice = createSlice({
  name: 'headerData',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setData: (state, action: PayloadAction<{ title: string }>) => {
      state.data = action.payload;
    },
    clearData: (state) => {
      state.data = {title: '' };
    },
  },
});



export const Header = () => {

  const headerTitle = useAppSelector(headerTitleData);
  return (
    <div className={styles.header}>
      <img src="/img/logoGNS.svg" alt="logo" />

      <div className={styles.txtStyle}>
        Государственная Налогавая Служба
        <br />
        <span>Кыргызской Республики</span>
      </div>
      <div className={styles.vl}></div>
      <div>
        <h1>{headerTitle.title}</h1>
      </div>
    </div>
  );
};

export const { setData, clearData } = headerDataSlice.actions;
export const headerTitleData = (state: RootState) => state.headerData.data;
export default headerDataSlice.reducer;
