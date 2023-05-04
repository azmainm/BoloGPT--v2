// import { Container } from './styles';
export const useSpeech = () => {

    const speak = ({ message, pitch = 1 }) => {
        const speech = window.speechSynthesis;
        let voices = speech.getVoices();
        const femaleVoice = voices.find((voice) => voice.lang.startsWith('en') && voice.name.includes('Female')); // Find a female voice with an English accent
        const utterThis = new SpeechSynthesisUtterance(message);
        utterThis.voice = femaleVoice || voices[0]; // Use the female voice if found, otherwise use the default voice
        utterThis.pitch = pitch;
        speech.speak(utterThis);
    }


    const stopVoice = () => {
        const speech = window.speechSynthesis;
        speech.cancel()
    }

    return {
        speak,
        stopVoice
    };
}