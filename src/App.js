import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/[Layout]';
import Dashboard from './pages/Dashboard';
import FireSpots from './pages/FireSpots';
import FireSpot from './pages/FireSpots/[id]';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/FireSpots" element={<FireSpots />} />
          <Route path="/FireSpots/:id" element={<FireSpot />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
