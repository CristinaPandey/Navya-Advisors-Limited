import React from 'react';
import { Line } from 'react-chartjs-2';
import { useStockData } from '../api/useData.tsx';

import { CategoryScale, Chart } from "chart.js/auto";


Chart.register(CategoryScale);
const GraphComponent: React.FC = () => {
    const { isLoading, isError, data } = useStockData();
    console.log("graph", data);

    if (isLoading) return <div>Loading...</div>;
    if (isError || !data || !data.data || !data.data['Weekly Adjusted Time Series']) return <div>Error fetching data</div>;

    const weeklyTimeSeries = data.data['Weekly Adjusted Time Series'];
    const dates = Object.keys(weeklyTimeSeries).slice(0, 7);
    const weeklyData = dates.map(date => weeklyTimeSeries[date]);
    const openPrices = weeklyData.map(item => parseFloat(item['1. open']));

    const chartData = {
        labels: dates.reverse(),
        datasets: [
            {
                label: 'Open Price',
                data: openPrices.reverse(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return <Line data={chartData} />;
};

export default GraphComponent;
