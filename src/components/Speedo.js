import React from "react";
import "./Body.css";

export default function Body(props) {
  return (
    <div className="Body">
      <h3>{props.gear}</h3>
      <h4>{Math.round(props.speed)} mp/h</h4>
      <small>{props.RPM} RPM</small>
    </div>
  );
}
