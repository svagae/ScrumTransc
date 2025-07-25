import React from 'react';

const getStatusText = (isRecording) => (isRecording ? 'Recording' : 'Not Recording');
const getDotColor = (isRecording) => (isRecording ? '#2196f3' : '#b0b8c1');

const StatusIndicator = ({ isRecording }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f1f5f9',
      borderRadius: '2rem',
      padding: '0.3rem 1.2rem',
      fontWeight: 500,
      color: '#6b7280',
      fontSize: '1.1rem',
      boxShadow: '0 1px 4px #e0e7ef',
      width: 'fit-content',
    }}
    className="status-indicator"
  >
    <span
      style={{
        display: 'inline-block',
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: getDotColor(isRecording),
        marginRight: 10,
        border: '2px solid #e5e7eb',
      }}
    />
    {getStatusText(isRecording)}
  </div>
);

export default StatusIndicator;