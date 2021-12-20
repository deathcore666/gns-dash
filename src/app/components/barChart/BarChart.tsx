import React, { useEffect, useState } from 'react';
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
import faker from 'faker';
import axios, {AxiosResponse} from "axios";
import { PersonalRevenue } from '../../shared/interfaces/PersonalRevenue';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const fetchDataHttp = async (): Promise<AxiosResponse<PersonalRevenue[]>> => {
  debugger
  return await axios.get(
      `http://10.111.15.123:5085/api/ITAS/RevenuesByRayon`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      });
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
    },

  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const initialData = {
  labels,
  datasets: [
    {
      label: 'Факт',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#3BA6B3',
    },
    {
      label: 'План',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#EB5757',
    },
  ],
};

interface ChartDataItem {
  label: string;
  data: number[];
  backgroundColor: string;
}
interface ChartDataType {
  labels: string[];
  datasets: ChartDataItem[]
}

export const BarChart = () => {
  const [chartData, setChartData] = useState<ChartDataType>(initialData);
  useEffect(() => {
    (async () => {
      const temp = {...chartData};
      temp.labels = [];
      const rawData: AxiosResponse<PersonalRevenue[]> = await fetchDataHttp();
      rawData.data.forEach((item, key) => {
        temp.labels.push(item.rayonName);
        temp.datasets[0].data.push(item.totalAmount);
        temp.datasets[1].data.push(item.planTotalAmount);
      })

      setChartData(temp);
    })();
  }, []);

  return <Bar options={options} data={chartData} />;
}

export default BarChart;
