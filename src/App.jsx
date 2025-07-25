import React, { useState } from 'react';
import Header from './components/Header';
import RecorderControls from './components/RecorderControls';
import StatusIndicator from './components/StatusIndicator';
import TranscriptionBox from './components/TranscriptionBox';
import './index.css';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [stream, setStream] = useState(null); // Store audio stream

  const handleStartRecording = async () => {
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(audioStream); // Save stream for later use
      setIsRecording(true);
    } catch (err) {
      alert('Microphone access denied or not available.');
      setIsRecording(false);
    }
  };

  const handleStopRecording = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop()); // Stop all tracks
      setStream(null); // Clear stream
    }
    setIsRecording(false);
  };

  return (
    <div className="app">
      <Header />
      <RecorderControls
        isRecording={isRecording}
        onStart={handleStartRecording}
        onStop={handleStopRecording}
      />
      <StatusIndicator isRecording={isRecording} />
      <TranscriptionBox
        transcription={transcription}
        isRecording={isRecording}
      />
    </div>
  );
}

export default App;