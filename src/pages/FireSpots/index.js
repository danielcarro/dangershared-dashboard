// src/pages/FireSpots/index.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableHeader, TableBody, TableRow, TableData, Button } from './styles';
import fireSpotsData from '../../utils/fireSpotsData';

const FireSpots = () => {
  const [fireSpots, setFireSpots] = useState([]);

  useEffect(() => {
    setFireSpots(fireSpotsData);
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableData>ID</TableData>
          <TableData>Date</TableData>
          <TableData>Time</TableData>
          <TableData>ID User</TableData>
          <TableData>Location</TableData>
          <TableData>Status</TableData>
          <TableData>Action</TableData>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fireSpots.map(item => (
          <TableRow key={item.id}>
            <TableData>{item.id}</TableData>
            <TableData>{item.date}</TableData>
            <TableData>{item.time}</TableData>
            <TableData>{item.userId}</TableData>          
            <TableData>{item.location.lat}, {item.location.lng}</TableData> 
            <TableData>{item.status}</TableData>
            <TableData>
              <Link to={`/firespots/${item.id}`}>
                <Button>Go</Button>
              </Link>
            </TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FireSpots;
