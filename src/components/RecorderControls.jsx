import React from 'react';

const RecorderControls = ({ onStart, onStop, isRecording }) => (
  <div className="recorder-controls">
    <button
      className="rec-btn start"
      onClick={onStart}
      disabled={isRecording}
    >
      <span role="img" aria-label="mic">🎤</span>
      Start Recording
    </button>
    <button
      className="rec-btn stop"
      onClick={onStop}
      disabled={!isRecording}
    >
      <span role="img" aria-label="stop">🟥</span>
      Stop Recording
    </button>
  </div>
);

export default RecorderControls;