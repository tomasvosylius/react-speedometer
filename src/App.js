import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Throttle from "./components/Throttle";

const minRPM = 2000;
const maxRPM = 8000;
const maxSpeed = 120;

function App() {
  const [throttle, setThrottle] = useState(false);
  const [RPM, setRPM] = useState(minRPM);
  const [gear, setGear] = useState(1);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const increaseSpeed = () => {
      let newSpeed = speed + maxSpeed / Math.max(1, speed) / 30;
      setSpeed(Math.min(maxSpeed, newSpeed));
    };

    const decreaseSpeed = () => {
      setSpeed(Math.max(0, speed - 0.35));
    };

    const addGear = (value) => {
      if (value < 0) {
        setRPM(maxRPM);
      } else if (value !== gear) {
        setRPM(minRPM);
      }
      setGear(gear + value);
    };

    const interval = setInterval(() => {
      if (!throttle) {
        if (RPM > minRPM) {
          setRPM(Math.max(minRPM, RPM - 10));
        }

        if (speed > 0) {
          decreaseSpeed();
          if (RPM <= minRPM) addGear(-1);
        }
        return;
      }

      if (RPM < maxRPM) {
        setRPM(Math.min(maxRPM, RPM + 25));
      } else {
        addGear(1);
      }

      if (speed < maxSpeed) {
        increaseSpeed();
      }
    }, 10);

    return () => clearInterval(interval);
  }, [RPM, throttle, speed, gear]);

  return (
    <div className="App">
      <Throttle throttle={throttle} setThrottle={setThrottle} />
      <Body RPM={RPM} gear={gear} speed={speed} />
    </div>
  );
}

export default App;
