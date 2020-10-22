import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Throttle from "./components/Throttle";

const minRPM = 2000;
const maxRPM = 8000;

function App() {
  const [throttle, setThrottle] = useState(false);
  const [RPM, setRPM] = useState(minRPM);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!throttle) {
        if (RPM <= minRPM) return;

        setRPM(Math.max(minRPM, RPM - 10));
        return;
      }

      if (RPM >= maxRPM) return;

      setRPM(Math.min(maxRPM, RPM + 25));
    }, 10);

    return () => clearInterval(interval);
  }, [RPM, throttle]);

  return (
    <div className="App">
      <Throttle throttle={throttle} setThrottle={setThrottle} />
      <Body RPM={RPM} />
    </div>
  );
}

export default App;
