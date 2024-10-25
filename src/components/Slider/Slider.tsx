"use client";
import React from "react";
import * as BaseSlider from "@base_ui/react/Slider";

function Slider({
  className = "",
  defaultValue = 0,
  variant = "continuous",
  stopIndicators,
}: {
  className?: string;
  defaultValue?: number | number[];
  variant?: "continuous" | "discrete";
  stopIndicators?: boolean | number;
}) {
  const [value, setValue] = React.useState(defaultValue);
  const indicatorInterval =
    typeof stopIndicators === "boolean" && stopIndicators
      ? 10
      : (stopIndicators || 1) - 1;
  return (
    <BaseSlider.Root
      className={`MuiSlider-root MuiSlider-${variant} ${className}`}
      value={value}
      onValueChange={(value) => setValue(value)}
      style={
        {
          "--handle-position": `${value}%`,
          "--interval": indicatorInterval,
        } as React.CSSProperties
      }
    >
      <BaseSlider.Output />
      <BaseSlider.Control>
        <BaseSlider.Track className="MuiSlider-track">
          <BaseSlider.Indicator className="MuiSlider-activeTrack">
            {stopIndicators &&
              [
                ...Array(
                  typeof stopIndicators === "number" ? stopIndicators : 11
                ),
              ].map((_, index) => (
                <span
                  key={index}
                  className="MuiSlider-stopIndicator"
                  style={{ "--index": index } as React.CSSProperties}
                />
              ))}
          </BaseSlider.Indicator>
          <BaseSlider.Thumb className="MuiSlider-handle" />
          <span className="MuiSlider-inactiveTrack">
            {stopIndicators &&
              [
                ...Array(
                  typeof stopIndicators === "number" ? stopIndicators : 11
                ),
              ].map((_, index) => (
                <span
                  key={index}
                  className="MuiSlider-stopIndicator"
                  style={{ "--index": index } as React.CSSProperties}
                />
              ))}
          </span>
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}

export default Slider;
