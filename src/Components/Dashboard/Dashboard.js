

import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, XAxis, YAxis,Tooltip } from 'recharts';
import './Dashboard.css'



const Dashboard = () => {
  const [chart, SetChart] = useState([]);
  useEffect(() => {
    fetch('data.json').then(res => res.json()).then(data => SetChart(data));

  }, []);



  return (
    <div className='chart-container'>
      <div className='chart'>
        <h2>Investment VS Month Line Chart</h2>
        <LineChart width={400} height={400} data={chart}>
          <Line dataKey={'investment'}></Line>
          <XAxis dataKey={'month'}></XAxis>
          <YAxis></YAxis>
          <Tooltip />
        </LineChart>
        <p>X Axis=month and Y Axis=investment</p>
      </div>
      
      <div className='chart'>
        <h2>Sell vs Revenue Area chart</h2>
        <AreaChart
          width={500}
          height={400}
          data={chart}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sell" />
          <YAxis />

          <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
        </AreaChart>
        <p>X Axis=sell and Y Axis=revenue</p>
      </div>
    </div>
  );
};

export default Dashboard;