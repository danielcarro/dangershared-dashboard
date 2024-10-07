// src/pages/FireSpots/styles.js
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Button = styled.button`
  background-color: #4CAF50; /* Verde */
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049; /* Verde escuro */
  }
`;
