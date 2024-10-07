import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import nasaFireData from '../../utils/DataNasa';

// Registrar os componentes necessários no Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HighRiskChart = () => {
  const data = {
    labels: nasaFireData.highRiskLocations.map(loc => loc.location),
    datasets: [
      {
        label: 'Nível de Risco (%)',
        data: nasaFireData.highRiskLocations.map(loc => loc.riskLevel),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default HighRiskChart;
