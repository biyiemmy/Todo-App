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
    <div className="footer fixed bottom-0 text-center mt-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-lg shadow-md">
      <h4 className="text-2xl font-bold text-white">Clock: {time}</h4>
      <h5 className="mt-2 text-lg text-white">
        Time wait for nodbody, <br /> Oya start your task(s)
      </h5>
    </div>
  );
};
