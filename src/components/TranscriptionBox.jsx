import React from 'react';

function TranscriptionBox({ transcription, isRecording }) {
  let displayText = 'Transcription will appear here...';
  if (isRecording) {
    displayText = 'Transcribing...';
  } else if (transcription) {
    displayText = transcription;
  }

  return (
    <div
      style={{
        background: '#f0f7ff',
        border: '1.5px dashed #dbeafe',
        borderRadius: '16px',
        padding: '2rem 1.5rem',
        marginTop: '2rem',
        minHeight: '180px',
        color: '#64748b',
        fontSize: '1.15rem',
        fontWeight: 400,
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {displayText}
    </div>
  );
}

export default TranscriptionBox;