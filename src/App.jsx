import React, { useState, useRef } from 'react';
import Header from './components/Header';
import RecorderControls from './components/RecorderControls';
import StatusIndicator from './components/StatusIndicator';
import TranscriptionBox from './components/TranscriptionBox';
import { createSpeechRecognition } from './utils/useSpeechRecognition';
import './index.css';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [stream, setStream] = useState(null);
  const recognitionRef = useRef(null); // Speech recognition instance

  const handleStartRecording = async () => {
    try {
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(audioStream);
      setIsRecording(true);

      const recognition = createSpeechRecognition((text) => {
        setTranscription(text);
      });

      if (recognition) {
        recognitionRef.current = recognition;
        recognition.start();
      }

    } catch (err) {
      alert('Microphone access denied or not available.');
      setIsRecording(false);
    }
  };

  const handleStopRecording = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
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
