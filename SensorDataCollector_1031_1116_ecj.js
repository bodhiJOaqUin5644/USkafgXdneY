// 代码生成时间: 2025-10-31 11:16:01
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define the type for sensor data
type SensorDataType = {
  id: number;
  value: string;
  timestamp: Date;
};

// Define the props type
const propTypes = {
  onDataReceived: PropTypes.func.isRequired,
};

function SensorDataCollector({ onDataReceived }) {
  // State for storing sensor data
  const [sensorData, setSensorData] = useState<SensorDataType[]>([]);

  // Function to simulate data collection
  const collectData = () => {
    // Simulate sensor data
    const data = {
      id: new Date().getTime(),
      value: '123', // Placeholder for actual sensor value
      timestamp: new Date(),
    };
    setSensorData(prevData => [data, ...prevData]);
    onDataReceived(data);
  };

  // Simulate periodic data collection
  useEffect(() => {
    const interval = setInterval(() => {
      collectData();
    }, 1000); // Collect data every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Sensor Data Collector</h2>
      <ul>
        {sensorData.map(data => (
          <li key={data.id}>{data.value} - {data.timestamp.toDateString()}</li>
        ))}
      </ul>
    </div>
  );
}

SensorDataCollector.propTypes = propTypes;

export default SensorDataCollector;