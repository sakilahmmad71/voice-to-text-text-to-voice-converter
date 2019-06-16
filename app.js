const button = document.getElementById('button');
const showText = document.getElementById('showText');

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function () {
    console.log(`Voice speech recognition is activated. you can talk using microphone.`);
}

recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    showText.textContent = transcript;
    readOutLoud(transcript);
}

button.addEventListener('click', () => {
    recognition.start();
})


function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 2;
    speech.rate = 0.5;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}