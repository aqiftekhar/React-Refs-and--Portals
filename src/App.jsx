import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Entry Level" targetTime={1} />
        <TimeChallenge title="Basic Level" targetTime={5} />
        <TimeChallenge title="Medium Level" targetTime={10} />
        <TimeChallenge title="Tough Level" targetTime={15} />
      </div>
    </>
  );
}

export default App;
