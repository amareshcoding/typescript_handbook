import React, { useEffect, useRef, useState } from 'react';

const Sw2 = () => {
  const timeId = useRef<any>(null);
  const [time, setTime] = useState<number>(100);

  const start = () => {
    if (!timeId.current) {
      timeId.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
  };
  const pause = () => {
    clearInterval(timeId.current);
    timeId.current = null;
  };
  const reset = () => {
    clearInterval(timeId.current);
    timeId.current = null;
    setTime(100);
  };
  useEffect(() => {
    //
  });
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

export default Sw2;
