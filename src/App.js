import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Throttle from "./components/Throttle";

function App() {
  const [accelerator, setAccelerator] = useState(false);
  const [RPM, setRPM] = useState(2000);

  useCallback;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!accelerator) {
        if (RPM <= 2000) return;

        setRPM(RPM - 10);
        return;
      }

      if (RPM >= 8000) return;

      setRPM(RPM + 25);
    }, 10);

    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <Throttle accelerator={accelerator} setAccelerator={setAccelerator} />
      <Body RPM={RPM} />
    </div>
  );
}

export default App;
