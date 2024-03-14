export default function ResultModal({result, targetTime}) {
  return (
    <dialog className="result-modal" open>
      <h2>{result}</h2>
      <p>
        The target time was <strong>{targetTime} second(s)</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
