"use client";
import React, { useState } from "react";
import Slider from "@/components/Slider/Slider";
import { useControls } from "leva";

export default function SliderPage() {
  const { handlePosition } = useControls({
    handlePosition: {
      value: 50,
      min: 0,
      max: 100,
      step: 0.1,
    },
  });

  return (
    <div className="prose max-w-[700px] mx-auto py-5 px-2">
      <h1 className="text-3xl font-bold mb-6">Slider Component</h1>

      <h2>Basic</h2>
      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Slider
          style={
            {
              "--handle-position": `${handlePosition}%`,
              width: "100%",
            } as React.CSSProperties
          }
        />
      </div>

      <h2>Indicators</h2>
      <div className="flex flex-col rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Slider
          stopIndicators
          style={
            {
              "--handle-position": `${handlePosition}%`,
              width: "100%",
            } as React.CSSProperties
          }
        />

        <Slider
          variant="discrete"
          stopIndicators
          style={
            {
              "--handle-position": `${handlePosition}%`,
              width: "100%",
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}
