import React, { useEffect } from 'react';
import styles from './BarChart.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as faker from 'faker';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchBarChartDataAsync, selectBarChartData, selectBarChartStatus } from './barChartSlice';
import { BarChartDataInterface } from "../../shared/interfaces/barChartDataInterface";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'GNS ', // todo set by using props
    },
  },
};

export function BarChart() {
  const barChartData: BarChartDataInterface = useAppSelector(selectBarChartData);
  const barChartStatus: string = useAppSelector(selectBarChartStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (barChartStatus === 'idle') {
      dispatch(fetchBarChartDataAsync())
    }
  }, [dispatch]);

  return (
      <div className={styles.BarChart}>
        <Bar options={options} data={barChartData} />
      </div>);
}
