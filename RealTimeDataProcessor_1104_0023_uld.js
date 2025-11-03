// 代码生成时间: 2025-11-04 00:23:30
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define the prop types using PropTypes
const propTypes = {
    sourceUrl: PropTypes.string.isRequired,  // The URL of the data stream
    onNewData: PropTypes.func.isRequired    // A callback function to handle new data
};

// Define the default props
const defaultProps = {
    sourceUrl: '',
    onNewData: () => {}
};

const RealTimeDataProcessor = ({ sourceUrl, onNewData }) => {
    // State to store real-time data
    const [data, setData] = useState(null);

    // Effect to handle data stream
    useEffect(() => {
        const eventSource = new EventSource(sourceUrl);
        eventSource.onmessage = (event) => {
            const newData = JSON.parse(event.data);
            setData(newData);
            onNewData(newData);
        };

        // Cleanup function to close the event source connection
        return () => {
            eventSource.close();
        };
    }, [sourceUrl]);

    // Render method
    return (
        <div>
            <h2>Real-time Data</h2>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data received</p>}
        </div>
    );
};

// Set the prop types and default props
RealTimeDataProcessor.propTypes = propTypes;
RealTimeDataProcessor.defaultProps = defaultProps;

export default RealTimeDataProcessor;
