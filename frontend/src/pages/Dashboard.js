import React from 'react';
import Header from '../layout/Header';
import LineGraph from '../layout/LineGraph';
import BarGraph from '../layout/BarGraph';
import UserData from './userData';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Line Graph</h2>
            <LineGraph />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Bar Graph</h2>
            <BarGraph />
          </div>
        </div>
        <div className="p-4 ">
          <h2 className="text-lg font-semibold mb-4">User Information</h2>
          <UserData />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
