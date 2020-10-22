import React, { useState } from "react";
import "./Throttle.css";

export default function Throttle(props) {
  return (
    <button
      className="Accelerator"
      onMouseDown={() => props.setAccelerator(true)}
      onMouseUp={() => props.setAccelerator(false)}
      style={{ color: props.accelerator ? "green" : "red" }}
    >
      {"Accelerator"}
    </button>
  );
}
