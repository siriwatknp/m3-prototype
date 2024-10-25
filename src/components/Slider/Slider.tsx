"use client";
import React from "react";
import * as BaseSlider from "@base_ui/react/Slider";

function Slider({
  className = "",
  defaultValue = 0,
  stopIndicators,
  centered,
}: {
  className?: string;
  defaultValue?: number | number[];
  stopIndicators?: boolean | number;
  centered?: boolean;
}) {
  const [value, setValue] = React.useState(defaultValue);
  const indicatorInterval =
    typeof stopIndicators === "boolean" && stopIndicators
      ? 10
      : (stopIndicators || 1) - 1;
  return (
    <BaseSlider.Root
      className={`MuiSlider-root ${
        centered && "MuiSlider-centered"
      } ${className}`}
      value={value}
      onValueChange={(value) => setValue(value)}
      style={
        {
          "--interval": indicatorInterval,
          ...((Array.isArray(value)
            ? {
                "--handle-position": `${value[0]}%`,
                "--handle-position2": `${value[1]}%`,
                "--handle": 2,
              }
            : {
                "--handle-position": `${value}%`,
                "--handle": 1,
              }) as Record<string, any>),
        } as React.CSSProperties
      }
    >
      <BaseSlider.Output />
      <BaseSlider.Control>
        {Array.isArray(value) ? (
          <BaseSlider.Track className="MuiSlider-rail">
            <span className="MuiSlider-inactiveTrack"></span>
            <BaseSlider.Thumb className="MuiSlider-handle2" />
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
        ) : (
          <BaseSlider.Track className="MuiSlider-rail">
            <BaseSlider.Indicator
              className={`MuiSlider-track ${
                !centered ? "MuiSlider-activeTrack" : ""
              }`}
            >
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
            <span className="MuiSlider-track">
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
        )}
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}

export default Slider;
