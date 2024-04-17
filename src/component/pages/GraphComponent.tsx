import React from 'react';
import { Line } from 'react-chartjs-2';
import { useStockData } from '../../libs/queries.ts';

import { CategoryScale, Chart } from "chart.js/auto";

Chart.register(CategoryScale);

const GraphComponent: React.FC = () => {
    const { isLoading, isError, data } = useStockData();
    console.log("graph", data);

    if (isLoading) return <div>Loading...</div>;
    if (isError || !data || !data.data || !data.data['Weekly Adjusted Time Series']) return <div>Error fetching data</div>;

    const weeklyTimeSeries = data.data['Weekly Adjusted Time Series'];
    const dates = Object.keys(weeklyTimeSeries).slice(0, 7);
    const chartData = {
        labels: dates.reverse(),
        datasets: [
            {
                label: 'Open Price',
                data: dates.map(date => parseFloat(weeklyTimeSeries[date]['1. open'])).reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
            {
                label: 'High',
                data: dates.map(date => parseFloat(weeklyTimeSeries[date]['2. high'])).reverse(),
                fill: false,
                borderColor: 'rgb(192, 75, 75)',
                tension: 0.1,
            },
            {
                label: 'Low',
                data: dates.map(date => parseFloat(weeklyTimeSeries[date]['3. low'])).reverse(),
                fill: false,
                borderColor: 'rgb(75, 75, 192)',
                tension: 0.1,
            },
            {
                label: 'Close',
                data: dates.map(date => parseFloat(weeklyTimeSeries[date]['4. close'])).reverse(),
                fill: false,
                borderColor: 'rgb(192, 192, 75)',
                tension: 0.1,
            },
            {
                label: 'Adjusted Close',
                data: dates.map(date => parseFloat(weeklyTimeSeries[date]['5. adjusted close'])).reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 75)',
                tension: 0.1,
            },
            {
                label: 'Volume',
                data: dates.map(date => parseInt(weeklyTimeSeries[date]['6. volume'])).reverse(),
                fill: false,
                borderColor: 'rgb(192, 75, 192)',
                tension: 0.1,
            },
            {
                label: 'Dividend Amount',
                data: dates.map(date => parseFloat(weeklyTimeSeries[date]['7. dividend amount'])).reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return <Line data={chartData} />;
};

export default GraphComponent;
