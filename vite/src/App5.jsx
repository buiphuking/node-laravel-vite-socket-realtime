import React from "react";

const App5 = () => {
  const handleClick = (mp3) => {
    const synth = window.speechSynthesis;
    const text = mp3;
    const value = new SpeechSynthesisUtterance(text);
    value.rate = 1;
    value.pitch = 1;
    value.volume = 1;
    value.lang = "ja-JP";
    synth.speak(value);
  };

  return (
    <div>
      <h1>aaa</h1>
      <button onClick={() => handleClick("fujidaigaku")}>Text to Speech</button>
    </div>
  );
};

export default App5;
