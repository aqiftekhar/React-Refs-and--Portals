import { useRef, useState } from "react";

export default function Player() {
  const refPlayerName = useRef();
  const [playerName, setPlayerName] = useState(null);

  const handleclick = () => {
    setPlayerName(refPlayerName.current.value);
    refPlayerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"} </h2>
      <p>
        <input ref={refPlayerName} type="text" />
        <button onClick={handleclick}>Set Name</button>
      </p>
    </section>
  );
}
