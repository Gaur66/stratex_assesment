import React from 'react';
import { Bar } from 'react-chartjs-2';
import { BarElement } from 'chart.js'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  ChartJS.register(
BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const BarGraph = () => {
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    datasets: [
      {
        label: 'Bar Graph Data',
        data: [10, 7, 5, 12, 8],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <Bar data={data} />
    </div>
  );
};

export default BarGraph;
