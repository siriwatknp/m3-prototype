"use client";

import Slider from "@/components/Slider/Slider";
import { Leva, useControls, folder } from "leva";
import { useEffect } from "react";

function useSliderOverrides() {
  const defaultValues = {};

  const values = useControls({});

  useEffect(() => {
    const elements = document.querySelectorAll(
      "[data-slider-override]"
    ) as NodeListOf<HTMLElement>;
    elements.forEach((elm) => {
      Object.entries(values).forEach(([key, value]) => {
        if (value === defaultValues[key as keyof typeof defaultValues]) {
          elm.style.removeProperty(key);
        } else {
          elm.style.setProperty(
            key,
            typeof value === "number" ? `${value}px` : value
          );
        }
      });
    });
  }, [values]);

  return values;
}

export default function Page() {
  useSliderOverrides();
  return (
    <div className="prose dark:prose-invert max-w-[700px] mx-auto py-5 px-2">
      <Leva oneLineLabels />
      <h1>Slider Example</h1>

      <h2>Public variable overrides</h2>
      <p>
        The panel on the right lists all public variables that the consumer can
        override from any level of the DOM. By changing the values, the public
        variables will be attached to this demo.
      </p>
      <div
        data-slider-override
        className="grid grid-cols-1 border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4"
      >
        <Slider defaultValue={50} />
      </div>

      <h2>Indicators</h2>
      <div className="flex flex-col rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Slider defaultValue={50} variant="discrete" stopIndicators />
        <Slider defaultValue={50} variant="discrete" stopIndicators={3} />
      </div>
    </div>
  );
}
