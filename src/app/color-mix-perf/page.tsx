"use client";
import Button from "@/components/Button/Button";
import React from "react";
import { flushSync } from "react-dom";

function printArrayStats(numbers: number[]): void {
  // Calculate the average
  const sum: number = numbers.reduce((acc, num) => acc + num, 0);
  const average: number = sum / numbers.length;

  // Calculate the standard deviation
  const squareDiffs: number[] = numbers.map((num) =>
    Math.pow(num - average, 2)
  );
  const avgSquareDiff: number =
    squareDiffs.reduce((acc, val) => acc + val, 0) / numbers.length;
  const stdDev: number = Math.sqrt(avgSquareDiff);

  // Print the result
  console.log(`Average: ${average.toFixed(2)} ± ${stdDev.toFixed(2)}`);
}

export default function Component() {
  const [show, setShow] = React.useState(false);

  const run = () => {
    const results = [];

    for (let i = 0; i < 20; i++) {
      flushSync(() => {
        setShow(false);
      });
      const start = performance.now();
      flushSync(() => {
        setShow(true);
      });
      const end = performance.now();
      results.push(end - start);
    }

    console.log(printArrayStats(results));
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setShow(!show)}>toggle</button>
        <button onClick={run}>run</button>
      </div>

      {show && (
        <div>
          {Array.from({ length: 10000 }).map((_, index) => (
            <Button key={index}>Button {index + 1}</Button>
          ))}
        </div>
      )}
    </div>
  );
}
