import { useState } from 'react'
import { Howl } from 'howler'
// import { useEffect } from 'react';

function App() {
  const [volume, setVolume] = useState(0.5);
console.log(volume)
  let sound = {
    crickets: new Howl({
      src: ['../src/assets/crickets.wav'],
      // html5: true,
      preload: true,
      loop: true,
      volume: volume,
    })
  }

  const handleClick = () => {
    if (!sound.crickets.playing()) {
      sound.crickets.play();
    } else {
      sound.crickets.pause();
    }
  }

  const handleChange =  (e) => {
    setVolume(e.target.value)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Play</button>
      <input type="range" step="0.01" min="0" max="1" onChange={handleChange} value={volume}></input>
    </div>
  )
}

export default App
