import React, { useEffect, useState } from "react";
import './style.css';

const date = new Date();
function Clock() {
  const [time, setTime] = useState({
    hour: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds()
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setTime({
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds()
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">{time.hour < 10 ? "0" + time.hour : time.hour}:{time.min < 10 ? "0" + time.min : time.min}:{time.sec < 10 ? "0" + time.sec : time.sec}</div>
  );
}

export default Clock;