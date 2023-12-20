

const synth = window.speechSynthesis;
const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "en-US";
  voice.volume = 4;
  voice.rate = 1;
  voice.pitch = 2; 
  synth.speak(voice);
}