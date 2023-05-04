import { FiberManualRecord, Stop } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';
import ChatGPT from './components/ChatGPT';

function App() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('');
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <main>
      <h1>
        <span className="bolo-text">Bolo</span>
        <span>GPT</span>
      </h1>

      <div className="buttons_container">
        <button className='micStart' onClick={SpeechRecognition.startListening} style={{ background: listening ? '#dbfcf9' : '#a1f0e4cc' }}><FiberManualRecord style={{ color: 'black' }} /></button>
        <button className='micStop' onClick={SpeechRecognition.stopListening}><Stop /></button>
        <ChatGPT
          transcript={transcript}
          listening={listening}
          resetTranscript={resetTranscript}
          setLoading={setLoading}
          message={message}
          setMessage={setMessage}
        />
      </div>
      {loading && <CircularProgress />}
      <div className="transcript_container">
        <p><strong>User:</strong> {transcript}</p>
        <p><strong>BoloGPT:</strong> {message}</p>
      </div>
      {/* <Footer /> */}

      <h1 className="footer">
        © Azmain Morshed 2023. All rights reserved.
      </h1>
    </main>
  );
}

export default App;
