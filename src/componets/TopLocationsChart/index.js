import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import nasaFireData from '../../utils/DataNasa';

// Registrar os componentes necessários no Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TopLocationsChart = () => {
  const data = {
    labels: nasaFireData.topLocations.map(loc => loc.location),
    datasets: [
      {
        label: 'Número de Incêndios',
        data: nasaFireData.topLocations.map(loc => loc.fires),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  return <Bar data={data} />;
};

export default TopLocationsChart;
