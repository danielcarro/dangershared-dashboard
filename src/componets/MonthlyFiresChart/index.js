import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import nasaFireData from '../../utils/DataNasa';

// Registrar os componentes necessários no Chart.js
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MonthlyFiresChart = () => {
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Focos de Incêndio - 2023',
        data: nasaFireData.monthlyFires['2023'],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      },
      {
        label: 'Focos de Incêndio - 2024',
        data: nasaFireData.monthlyFires['2024'],
        fill: false,
        borderColor: 'rgba(153,102,255,1)',
        tension: 0.1
      }
    ]
  };

  return <Line data={data} />;
};

export default MonthlyFiresChart;
