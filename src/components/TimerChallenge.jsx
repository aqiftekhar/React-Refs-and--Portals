import { useRef, useState } from "react";

export default function TimeChallenge({ title, targetTime }) {
  const timer = useRef();
const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  

  const handleStart = () => {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  };

  const handleStop = () =>{

    clearTimeout(timer.current);
    setTimerStarted(false);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={timerStarted ? handleStop : handleStart}>
        {timerStarted ? "Stop" : "Start"} Challange
      </button>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timer is running..." : "Timer is stoped!"}
      </p>
    </section>
  );
}
