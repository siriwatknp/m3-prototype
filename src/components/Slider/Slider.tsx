"use client";
import React, { useState, useRef, useEffect } from "react";

const Slider = ({
  stopIndicators,
  variant = "continuous",
  ...props
}: React.JSX.IntrinsicElements["span"] & {
  stopIndicators?: boolean | number;
  variant?: "continuous" | "discrete";
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [value, setValue] = useState(50); // Initial value set to 50
  const sliderRef = useRef<HTMLSpanElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPressed(true);
    handleMouseMove(e);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPressed && sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newValue = Math.min(
        Math.max(((e.clientX - rect.left) / rect.width) * 100, 0),
        100
      );
      setValue(newValue);
    }
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsPressed(false);
    };
    document.addEventListener("mouseup", handleMouseUpGlobal);
    return () => document.removeEventListener("mouseup", handleMouseUpGlobal);
  }, []);

  return (
    <span
      className={`MuiSlider-root ${
        isPressed ? "Mui-pressed" : ""
      } MuiSlider-${variant}`}
      ref={sliderRef}
      style={{ "--handle-position": `${value}%` } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      role="slider"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <span className="MuiSlider-track MuiSlider-activeTrack">
        {stopIndicators &&
          [
            ...Array(typeof stopIndicators === "number" ? stopIndicators : 11),
          ].map((_, index) => (
            <span
              key={index}
              className="MuiSlider-stopIndicator"
              style={{ "--index": index } as React.CSSProperties}
            />
          ))}
      </span>
      <span className="MuiSlider-handle" role="slider" tabIndex={0}></span>
      <span className="MuiSlider-track MuiSlider-inactiveTrack">
        {stopIndicators &&
          [
            ...Array(typeof stopIndicators === "number" ? stopIndicators : 11),
          ].map((_, index) => (
            <span
              key={index}
              className="MuiSlider-stopIndicator"
              style={{ "--index": index } as React.CSSProperties}
            />
          ))}
      </span>
    </span>
  );
};

export default Slider;
