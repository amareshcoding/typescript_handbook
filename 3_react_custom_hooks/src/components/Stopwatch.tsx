import { useRef, useState } from 'react';
import useStopwatch from '../hooks/useStopwatch';

type StopwatchProps = {
  initialValue?: number;
};

const Stopwatch = ({ initialValue = 100 }: StopwatchProps) => {
  const { time, start, pause, reset } = useStopwatch(initialValue);

  return (
    <div>
      <h1>StopWatch</h1>
      <h3>{time}</h3>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
