import React, { useEffect, useRef, useState } from 'react';
const useStopwatch = (initialValue: number) => {
  const timeId = useRef<any>(null);
  const [time, setTime] = useState<number>(initialValue);

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
    setTime(initialValue);
  };
  return { time, start, pause, reset };
};

export default useStopwatch;
