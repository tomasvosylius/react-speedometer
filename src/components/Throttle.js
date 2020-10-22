import React from "react";
import "./Throttle.css";

export default function Throttle(props) {
  return (
    <button
      className="Throttle"
      onMouseDown={() => props.setThrottle(true)}
      onMouseUp={() => props.setThrottle(false)}
      style={{ color: props.throttle ? "green" : "red" }}
    >
      {"Full gas!"}
    </button>
  );
}
