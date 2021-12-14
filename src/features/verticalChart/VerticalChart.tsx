import React, {useEffect} from 'react';
import {fetchAsync, selectVerticalChartData} from './verticalChartSlice';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import { Card, CardContent, CardHeader } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
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
            text: 'Chart.js Bar Chart',
        },
    },
};

const VerticalChart = () => {
    const rawData = useAppSelector(selectVerticalChartData);
    const dispatch = useAppDispatch();
    console.log('rawData', rawData)
    useEffect(() => {
        dispatch(fetchAsync());
    },[]);
    const labels: number[] = []
    
    const data = {
        labels,
        datasets: [
            {
                label: 'L',
                data: rawData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'P',
                data: rawData,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div>
                <Card>
                <CardHeader/>
                <CardContent>
                <Bar options={options}  data={data}/>
                </CardContent>
             
                </Card>

      
     
         
        </div>
    );
};

export default VerticalChart;