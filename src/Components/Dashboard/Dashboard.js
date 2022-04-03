
import { Tooltip } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart,  XAxis, YAxis } from 'recharts';



const Dashboard = () => {
     const [chart,SetChart]=useState([]);
     useEffect(()=>{
         fetch('data.json').then(res=>res.json()).then(data=>SetChart(data));

    },[]);
  
  
   
    return (
        <div>
          <h2>Investment VS Month Line Chart</h2>
           <LineChart width={400} height={400} data={chart}>
          <Line dataKey={'investment'}></Line>
          <XAxis dataKey={'month'}></XAxis>
          <YAxis></YAxis>
       </LineChart> 
       <div>
          <h2>Sell vs Revenue chart</h2>
       <AreaChart
          width={500}
          height={400}
          data={chart}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sell" />
          <YAxis />
          
          <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
       </div>
        </div>
    );
};

export default Dashboard;