import React, { useEffect } from 'react';
import { useSpeech } from './hooks/useSpeech';
import { chatService } from './service/chatService';

function ChatGPT({ transcript, listening, resetTranscript, setLoading, message, setMessage }) {
  const { speak, stopVoice } = useSpeech();

  const callGpt = async () => {
    setLoading(true)
    const chat = await chatService.callGpt(transcript);
    setMessage(chat);
    setLoading(false)
  }

  const reset = () => {
    resetTranscript();
    setMessage('');
    stopVoice();
  }

  useEffect(() => {
    if (!listening) callGpt();
    // eslint-disable-next-line
  }, [transcript, listening]);

  useEffect(() => {
    if (message) speak({ message, pitch: 0 });
    // eslint-disable-next-line
  }, [message]);

  return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ChatGPT;