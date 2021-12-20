import React, {useEffect} from 'react';
import styles from './LineChart.module.css';
import {fetchAsync, selectLineChartData} from './lineChartSlice';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import axios, { AxiosResponse } from 'axios';
import { IncomeInfoAggregateInterface } from '../../shared/interfaces/incomeInfoAggregateInterface';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: '',
        },
    },
};

const LineChart = () => {
    const rawData = useAppSelector(selectLineChartData);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchAsync());
    }, [dispatch]);
    console.log('render')

    const labels: number[] = []
    rawData.L.map(o => labels.includes(o.date) ? null :  labels.push(o.date))
    rawData.P.map(o => labels.includes(o.date) ? null :  labels.push(o.date))
    const data = {
        labels,
        datasets: [
            {
                label: 'L',
                data: rawData.L.map((obj) => obj.value),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'P',
                data: rawData.P.map((obj) => obj.value),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div className={styles.LineChart}>
            <Line options={options} data={data}/>
        </div>
    );
};


// export const data = {
//     labels,
//     datasets: [
//         {
//             label: 'Dataset 1',
//             data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//         {
//             label: 'Dataset 2',
//             data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         },
//     ],
// };

export default LineChart;
