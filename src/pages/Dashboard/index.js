import React from 'react';
import TopLocationsChart from '../../componets/TopLocationsChart';
import HighRiskChart from '../../componets/HighRiskChart';
import MonthlyFiresChart from '../../componets/MonthlyFiresChart';

const Dashboard = () => {
  return (
    <div>
      <h2>Fires in Forests</h2>
      <TopLocationsChart />
      <h2>Highest Risk Locations</h2>
      <HighRiskChart />
      <h2>Monthly Fire Comparison</h2>
      <MonthlyFiresChart />
    </div>
  );
};

export default Dashboard;
