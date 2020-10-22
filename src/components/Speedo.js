import React from "react";
import "./Speedo.css";
import Ring, { RevRing } from "./Ring";

const speedoRadius = 100;

export default function Speedo({ speed, gear, RPM, maxRPM }) {
  return (
    <div className="Speedo">
      <div className="text">
        <h4>{Math.round(speed)} MP/H</h4>
        <small>{gear} gear</small>
      </div>
      <div className="circles">
        <Ring
          radius={speedoRadius}
          strokeWidth={0}
          progress={100}
          fill="#762B2B"
          stroke="none"
          progressMultiply="1.0"
        />
        <RevRing
          radius={speedoRadius}
          strokeWidth={8}
          progress={(100 / maxRPM) * RPM}
          stroke="#FF5837"
        />
      </div>
    </div>
  );
}
