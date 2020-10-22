import React from "react";
import "./Ring.css";

export default function Ring({
  radius,
  strokeWidth,
  progress,
  fill = "transparent",
  stroke = "white",
  progressMultiply = 1.0,
}) {
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - ((progress * progressMultiply) / 100) * circumference; // Only 75%, so it's not a full circle.

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke={stroke}
        fill={fill}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}

export function RevRing({ radius, strokeWidth, progress, stroke }) {
  return (
    <Ring
      fill="transparent"
      radius={radius}
      stroke={stroke}
      strokeWidth={strokeWidth}
      progress={progress}
      progressMultiply={0.75}
    ></Ring>
  );
}
