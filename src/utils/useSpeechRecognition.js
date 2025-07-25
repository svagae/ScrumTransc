export const createSpeechRecognition = (onResultCallback) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if(!SpeechRecognition) {
        alert("Speech Recognition API is not supported in this browser.");
        return null;
    }
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
        let transcript = '';
        for (let i =event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
}
        onResultCallback(transcript);

    };
    recognition.onerror = (event) => {
        console.error("Speech Recognition Error: ", event.error);
    };
    return recognition;
};