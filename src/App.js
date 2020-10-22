import React, { useEffect, useState } from "react";
import "./App.css";
import Speedo from "./components/Speedo";
import Throttle from "./components/Throttle";

const minRPM = 900;
const maxRPM = 6000;
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

    const increateRPM = () => {
      let newRPm =
        RPM +
        (maxRPM / Math.max(1, RPM)) * 7 +
        (maxSpeed / Math.max(1, speed)) * 2.5;
      setRPM(Math.min(maxRPM, newRPm));
    };

    const decreaseRPM = () => {
      setRPM(Math.max(minRPM, RPM - (speed > 0 ? 35 : 60)));
    };

    const addGear = (value) => {
      if (value === 0) return;

      if (value < 0) {
        setRPM(maxRPM);
      } else {
        setRPM(minRPM);
      }

      setGear(gear + value);
    };

    const interval = setInterval(() => {
      if (!throttle) {
        if (RPM > minRPM) {
          decreaseRPM();
        } else if (RPM <= minRPM && gear > 1) addGear(-1);

        if (speed > 0) {
          decreaseSpeed();
        } else if (gear > 1) {
          setGear(1);
          setRPM(minRPM);
        }
        return;
      }

      if (RPM < maxRPM) {
        increateRPM();
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
      <Speedo RPM={RPM} gear={gear} speed={speed} maxRPM={maxRPM} />
    </div>
  );
}

export default App;
