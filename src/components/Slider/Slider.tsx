"use client";
import React, { useState, useRef, useEffect } from "react";

const Slider = () => {
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
      className={`MuiSlider-root ${isPressed ? "Mui-pressed" : ""}`}
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
    >
      <span className="MuiSlider-track MuiSlider-activeTrack"></span>
      <span className="MuiSlider-handle"></span>
      <span className="MuiSlider-track MuiSlider-inactiveTrack"></span>
    </span>
  );
};

export default Slider;
