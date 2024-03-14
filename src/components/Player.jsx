import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState('');
const [isValid, setIsValid] = useState(false);
  const handleChange = (e) => {
    return setPlayerName(e.target.value);
  }

  const handleclick = () => {
setIsValid(true);
  }
  return (
    <section id="player">
      <h2>Welcome {isValid ? playerName : 'unknown entity'} </h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={handleclick}>Set Name</button>
      </p>
    </section>
  );
}
