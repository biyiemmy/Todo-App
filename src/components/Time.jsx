import { useEffect, useState } from "react";

export const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="time">
      <h4>Clock: {time}</h4>
      <h5>Time wait for nodbody, oya start your todo</h5>
    </div>
  );
};
