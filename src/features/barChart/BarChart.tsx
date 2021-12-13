import React, { useEffect } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchBarChartDataAsync, selectBarChartData } from './barChartSlice';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

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
      text: 'GNS ',
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
export function BarChart() {
  const rawData = useAppSelector(selectBarChartData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBarChartDataAsync())
  }, []);
  console.log(rawData)
  const labels: number[] = []
  const data = {
    labels,
    datasets: rawData.map((dataUnit: { name: any; count: any; }) => ({
      label: dataUnit.name,
      data: [dataUnit.count],
      borderColor: `rgb(${faker.datatype.number({min: 0, max: 255})}, ${faker.datatype.number({min: 0, max: 255})}, ${faker.datatype.number({min: 0, max: 255})})`,
      backgroundColor: `rgb(${faker.datatype.number({min: 0, max: 255})}, ${faker.datatype.number({min: 0, max: 255})}, ${faker.datatype.number({min: 0, max: 255})})`,
    }))
    // datasets: [
    //   {
    //     label: 'Dataset 1',
    //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //     borderColor: 'rgb(255, 99, 132)',
    //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //   },
    //   {
    //     label: 'Dataset 2',
    //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //     borderColor: 'rgb(53, 162, 235)',
    //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //   },
    // ],
  };
  return <Bar options={options} data={data} />;
}
