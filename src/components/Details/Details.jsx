import React from 'react';
import { CardHeader, CardContent, Typography } from '@mui/material';
import { Chart, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

import { IncomeCard, IncomeCardContent } from './styles';
Chart.register(ArcElement,ChartDataLabels);

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);

  // Define chartOptions for customization
  const chartOptions = {
    plugins: {
        datalabels: {
            color: '#fff',
            font: {
                weight: 'bold',
                size: 14,
            },
            formatter: (value, context) => {
                const label = context.chart.data.labels[context.dataIndex];
                return `${label}: ₹${value}`;
            },
        },
        legend: {
            display: true,
            position: 'top',
        },
    }, 
    responsive: false,
    maintainAspectRatio: false,
};




  return (
    <IncomeCard className={title === 'Income' ? 'income' : 'expense'}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">
          ₹ {total} {/* Use Ctrl+Alt+4 for the rupee symbol */}
        </Typography>
        <Doughnut data={chartData} options={chartOptions} />  
      </CardContent>
    </IncomeCard>
  );
};

export default Details;
