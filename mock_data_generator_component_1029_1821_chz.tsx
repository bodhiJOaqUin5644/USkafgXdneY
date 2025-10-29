// 代码生成时间: 2025-10-29 18:21:16
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Mock Data Generator Component
const MockDataGenerator = ({ count }) => {
    // State to store generated mock data
    const [mockData, setMockData] = useState([]);
    
    // Function to generate mock data
    const generateMockData = () => {
        const data = [];
        for (let i = 0; i < count; i++) {
            data.push({
                id: i + 1,
                name: `Name ${i + 1}`,
                email: `email${i + 1}@example.com`,
                address: `1234 ${i + 1} Street`,
                city: `City ${i + 1}`,
                country: `Country ${i + 1}`,
                zipCode: `12345`,
            });
        }
        setMockData(data);
    };
    
    // Render the component
    return (
        <div>
            <button onClick={generateMockData}>Generate Mock Data</button>
            {mockData.length > 0 && <ul>
                {mockData.map((item, index) => (
                    <li key={index}>
                        ID: {item.id}, Name: {item.name}, Email: {item.email}, Address: {item.address}, City: {item.city}, Country: {item.country}, ZipCode: {item.zipCode}
                    </li>
                ))}
            </ul>}
        </div>
    );
};

// PropTypes for type checking
MockDataGenerator.propTypes = {
    count: PropTypes.number.isRequired,
};

// Default props
MockDataGenerator.defaultProps = {
    count: 5,
};

export default MockDataGenerator;