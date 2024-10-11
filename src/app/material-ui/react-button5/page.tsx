"use client";

import Button from "@/components/Button5/Button5";
import { Leva, useControls, folder } from "leva";
import { useEffect } from "react";

function useButtonOverrides() {
  const defaultValues = {
    "--md-comp-button-corner": 40,
    // Elevated Button
    "--md-comp-button-elevated-shadow":
      "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    "--md-comp-button-elevated-color": "rgb(101, 85, 143)",
    "--md-comp-button-elevated-background": "rgb(247, 242, 250)",
    "--md-comp-button-elevated-hover-shadow":
      "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
    "--md-comp-button-elevated-hover-background": "rgb(238, 232, 242)",
    "--md-comp-button-elevated-focus-shadow":
      "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    "--md-comp-button-elevated-focus-background": "rgb(235, 228, 240)",
    "--md-comp-button-elevated-active-shadow":
      "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    "--md-comp-button-elevated-active-background": "rgb(235, 228, 240)",
    "--md-comp-button-elevated-disabled-color": "rgba(28, 27, 31, 0.38)",
    "--md-comp-button-elevated-disabled-background": "rgba(28, 27, 31, 0.12)",
    "--md-comp-button-elevated-disabled-shadow": "none",

    // Filled Button
    "--md-comp-button-filled-shadow": "none",
    "--md-comp-button-filled-background": "rgb(101, 85, 143)",
    "--md-comp-button-filled-color": "rgb(255, 255, 255)",
    "--md-comp-button-filled-hover-shadow":
      "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    "--md-comp-button-filled-hover-background": "rgb(93, 78, 132)",
    "--md-comp-button-filled-focus-shadow": "none",
    "--md-comp-button-filled-focus-background": "rgb(91, 76, 129)",
    "--md-comp-button-filled-active-shadow": "none",
    "--md-comp-button-filled-active-background": "rgb(91, 76, 129)",
    "--md-comp-button-filled-disabled-color": "rgba(28, 27, 31, 0.38)",
    "--md-comp-button-filled-disabled-background": "rgba(28, 27, 31, 0.12)",
    "--md-comp-button-filled-disabled-shadow": "none",

    // Text Button
    "--md-comp-button-text-background": "transparent",
    "--md-comp-button-text-color": "rgb(101, 85, 143)",
    "--md-comp-button-text-hover-background": "rgba(101, 85, 143, 0.08)",
    "--md-comp-button-text-focus-background": "rgba(101, 85, 143, 0.1)",
    "--md-comp-button-text-active-background": "rgba(101, 85, 143, 0.1)",
    "--md-comp-button-text-disabled-color": "rgba(28, 27, 31, 0.38)",
    "--md-comp-button-text-disabled-background": "rgba(28, 27, 31, 0.12)",
    "--md-comp-button-text-disabled-shadow": "none",

    // Outlined Button
    "--md-comp-button-outlined-border-color": "rgb(121, 116, 126)",
    "--md-comp-button-outlined-color": "rgb(101, 85, 143)",
    "--md-comp-button-outlined-background": "transparent",
    "--md-comp-button-outlined-hover-border-color": "rgb(121, 116, 126)",
    "--md-comp-button-outlined-hover-background": "rgba(101, 85, 143, 0.08)",
    "--md-comp-button-outlined-focus-border-color": "rgb(121, 116, 126)",
    "--md-comp-button-outlined-focus-background": "rgba(101, 85, 143, 0.1)",
    "--md-comp-button-outlined-active-border-color": "rgb(121, 116, 126)",
    "--md-comp-button-outlined-active-background": "rgba(101, 85, 143, 0.1)",
    "--md-comp-button-outlined-disabled-color": "rgba(28, 27, 31, 0.38)",
    "--md-comp-button-outlined-disabled-background": "transparent",
    "--md-comp-button-outlined-disabled-border-color": "rgba(28, 27, 31, 0.12)",

    // Filled Tonal Button
    "--md-comp-button-filled-tonal-shadow": "none",
    "--md-comp-button-filled-tonal-background": "rgb(232, 222, 248)",
    "--md-comp-button-filled-tonal-color": "rgb(29, 25, 43)",
    "--md-comp-button-filledTonal-hover-shadow":
      "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    "--md-comp-button-filledTonal-hover-background": "rgb(223, 212, 240)",
    "--md-comp-button-filledTonal-focus-shadow": "none",
    "--md-comp-button-filledTonal-focus-background": "rgb(220, 208, 238)",
    "--md-comp-button-filledTonal-active-shadow": "none",
    "--md-comp-button-filledTonal-active-background": "rgb(220, 208, 238)",
    "--md-comp-button-filledTonal-disabled-color": "rgba(28, 27, 31, 0.38)",
    "--md-comp-button-filledTonal-disabled-background":
      "rgba(28, 27, 31, 0.12)",
    "--md-comp-button-filledTonal-disabled-shadow": "none",
  };

  const values = useControls({
    corner: {
      min: 0,
      max: 40,
      step: 1,
      label: "Corner Radius",
      value: defaultValues["--md-comp-button-corner"],
    },
    Elevated: folder({
      "elevated-shadow": {
        label: "Shadow",
        value: defaultValues["--md-comp-button-elevated-shadow"],
      },
      "elevated-color": {
        label: "Color",
        value: defaultValues["--md-comp-button-elevated-color"],
      },
      "elevated-background": {
        label: "Background",
        value: defaultValues["--md-comp-button-elevated-background"],
      },
      "elevated-hover-shadow": {
        label: "Hover Shadow",
        value: defaultValues["--md-comp-button-elevated-hover-shadow"],
      },
      "elevated-hover-background": {
        label: "Hover Background",
        value: defaultValues["--md-comp-button-elevated-hover-background"],
      },
      "elevated-focus-shadow": {
        label: "Focus Shadow",
        value: defaultValues["--md-comp-button-elevated-focus-shadow"],
      },
      "elevated-focus-background": {
        label: "Focus Background",
        value: defaultValues["--md-comp-button-elevated-focus-background"],
      },
      "elevated-active-shadow": {
        label: "Active Shadow",
        value: defaultValues["--md-comp-button-elevated-active-shadow"],
      },
      "elevated-active-background": {
        label: "Active Background",
        value: defaultValues["--md-comp-button-elevated-active-background"],
      },
      "elevated-disabled-color": {
        label: "Disabled Color",
        value: defaultValues["--md-comp-button-elevated-disabled-color"],
      },
      "elevated-disabled-background": {
        label: "Disabled Background",
        value: defaultValues["--md-comp-button-elevated-disabled-background"],
      },
      "elevated-disabled-shadow": {
        label: "Disabled Shadow",
        value: defaultValues["--md-comp-button-elevated-disabled-shadow"],
      },
    }),
    Filled: folder({
      "filled-shadow": {
        label: "Shadow",
        value: defaultValues["--md-comp-button-filled-shadow"],
      },
      "filled-background": {
        label: "Background",
        value: defaultValues["--md-comp-button-filled-background"],
      },
      "filled-color": {
        label: "Color",
        value: defaultValues["--md-comp-button-filled-color"],
      },
      "filled-hover-shadow": {
        label: "Hover Shadow",
        value: defaultValues["--md-comp-button-filled-hover-shadow"],
      },
      "filled-hover-background": {
        label: "Hover Background",
        value: defaultValues["--md-comp-button-filled-hover-background"],
      },
      "filled-focus-shadow": {
        label: "Focus Shadow",
        value: defaultValues["--md-comp-button-filled-focus-shadow"],
      },
      "filled-focus-background": {
        label: "Focus Background",
        value: defaultValues["--md-comp-button-filled-focus-background"],
      },
      "filled-active-shadow": {
        label: "Active Shadow",
        value: defaultValues["--md-comp-button-filled-active-shadow"],
      },
      "filled-active-background": {
        label: "Active Background",
        value: defaultValues["--md-comp-button-filled-active-background"],
      },
      "filled-disabled-color": {
        label: "Disabled Color",
        value: defaultValues["--md-comp-button-filled-disabled-color"],
      },
      "filled-disabled-background": {
        label: "Disabled Background",
        value: defaultValues["--md-comp-button-filled-disabled-background"],
      },
      "filled-disabled-shadow": {
        label: "Disabled Shadow",
        value: defaultValues["--md-comp-button-filled-disabled-shadow"],
      },
    }),
    "Filled Tonal": folder({
      "filled-tonal-shadow": {
        label: "Shadow",
        value: defaultValues["--md-comp-button-filled-tonal-shadow"],
      },
      "filled-tonal-background": {
        label: "Background",
        value: defaultValues["--md-comp-button-filled-tonal-background"],
      },
      "filled-tonal-color": {
        label: "Color",
        value: defaultValues["--md-comp-button-filled-tonal-color"],
      },
      "filledTonal-hover-shadow": {
        label: "Hover Shadow",
        value: defaultValues["--md-comp-button-filledTonal-hover-shadow"],
      },
      "filledTonal-hover-background": {
        label: "Hover Background",
        value: defaultValues["--md-comp-button-filledTonal-hover-background"],
      },
      "filledTonal-focus-shadow": {
        label: "Focus Shadow",
        value: defaultValues["--md-comp-button-filledTonal-focus-shadow"],
      },
      "filledTonal-focus-background": {
        label: "Focus Background",
        value: defaultValues["--md-comp-button-filledTonal-focus-background"],
      },
      "filledTonal-active-shadow": {
        label: "Active Shadow",
        value: defaultValues["--md-comp-button-filledTonal-active-shadow"],
      },
      "filledTonal-active-background": {
        label: "Active Background",
        value: defaultValues["--md-comp-button-filledTonal-active-background"],
      },
      "filledTonal-disabled-color": {
        label: "Disabled Color",
        value: defaultValues["--md-comp-button-filledTonal-disabled-color"],
      },
      "filledTonal-disabled-background": {
        label: "Disabled Background",
        value:
          defaultValues["--md-comp-button-filledTonal-disabled-background"],
      },
      "filledTonal-disabled-shadow": {
        label: "Disabled Shadow",
        value: defaultValues["--md-comp-button-filledTonal-disabled-shadow"],
      },
    }),
    Text: folder({
      "text-background": {
        label: "Background",
        value: defaultValues["--md-comp-button-text-background"],
      },
      "text-color": {
        label: "Color",
        value: defaultValues["--md-comp-button-text-color"],
      },
      "text-hover-background": {
        label: "Hover Background",
        value: defaultValues["--md-comp-button-text-hover-background"],
      },
      "text-focus-background": {
        label: "Focus Background",
        value: defaultValues["--md-comp-button-text-focus-background"],
      },
      "text-active-background": {
        label: "Active Background",
        value: defaultValues["--md-comp-button-text-active-background"],
      },
      "text-disabled-color": {
        label: "Disabled Color",
        value: defaultValues["--md-comp-button-text-disabled-color"],
      },
      "text-disabled-background": {
        label: "Disabled Background",
        value: defaultValues["--md-comp-button-text-disabled-background"],
      },
      "text-disabled-shadow": {
        label: "Disabled Shadow",
        value: defaultValues["--md-comp-button-text-disabled-shadow"],
      },
    }),
    Outlined: folder({
      "outlined-border-color": {
        label: "Border Color",
        value: defaultValues["--md-comp-button-outlined-border-color"],
      },
      "outlined-color": {
        label: "Color",
        value: defaultValues["--md-comp-button-outlined-color"],
      },
      "outlined-background": {
        label: "Background",
        value: defaultValues["--md-comp-button-outlined-background"],
      },
      "outlined-hover-border-color": {
        label: "Hover Border Color",
        value: defaultValues["--md-comp-button-outlined-hover-border-color"],
      },
      "outlined-hover-background": {
        label: "Hover Background",
        value: defaultValues["--md-comp-button-outlined-hover-background"],
      },
      "outlined-focus-border-color": {
        label: "Focus Border Color",
        value: defaultValues["--md-comp-button-outlined-focus-border-color"],
      },
      "outlined-focus-background": {
        label: "Focus Background",
        value: defaultValues["--md-comp-button-outlined-focus-background"],
      },
      "outlined-active-border-color": {
        label: "Active Border Color",
        value: defaultValues["--md-comp-button-outlined-active-border-color"],
      },
      "outlined-active-background": {
        label: "Active Background",
        value: defaultValues["--md-comp-button-outlined-active-background"],
      },
      "outlined-disabled-color": {
        label: "Disabled Color",
        value: defaultValues["--md-comp-button-outlined-disabled-color"],
      },
      "outlined-disabled-background": {
        label: "Disabled Background",
        value: defaultValues["--md-comp-button-outlined-disabled-background"],
      },
      "outlined-disabled-border-color": {
        label: "Disabled Border Color",
        value: defaultValues["--md-comp-button-outlined-disabled-border-color"],
      },
    }),
  });

  useEffect(() => {
    const elements = document.querySelectorAll(
      "[data-button-override]"
    ) as NodeListOf<HTMLElement>;
    elements.forEach((elm) => {
      Object.entries(values).forEach(([key, value]) => {
        if (
          value ===
          defaultValues[`--md-comp-button-${key}` as keyof typeof defaultValues]
        ) {
          // the value is the same as default
          elm.style.removeProperty(`--md-comp-button-${key}`);
        } else {
          elm.style.setProperty(
            `--md-comp-button-${key}`,
            typeof value === "number" ? `${value}px` : value
          );
        }
      });
    });
  }, [values]);

  return values;
}

export default function Page() {
  useButtonOverrides();
  return (
    <div className="prose max-w-[700px] mx-auto py-5 px-2">
      <Leva oneLineLabels />
      <h1>Button Example</h1>

      <h2>Public variable overrides</h2>
      <p>
        The panel on the right list all public variables that the consumer can
        override from any level of the DOM. By changing the values, the public
        variables will be attached to this demo.
      </p>
      <div
        data-button-override
        className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4"
      >
        <Button variant="elevated">Elevated</Button>
        <Button variant="filled">Filled</Button>
        <Button variant="filledTonal">Filled Tonal</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>

      <h2>Variants</h2>
      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button variant="elevated">Elevated</Button>
        <Button variant="filled">Filled</Button>
        <Button variant="filledTonal">Filled Tonal</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>

      <h2>Error</h2>

      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button color="error" variant="elevated">
          Elevated
        </Button>
        <Button color="error" variant="filled">
          Filled
        </Button>
        <Button color="error" variant="filledTonal">
          Filled Tonal
        </Button>
        <Button color="error" variant="outlined">
          Outlined
        </Button>
        <Button color="error" variant="text">
          Text
        </Button>
      </div>

      <h2>Disabled</h2>

      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button disabled variant="elevated">
          Elevated
        </Button>
        <Button disabled variant="filled">
          Filled
        </Button>
        <Button disabled variant="filledTonal">
          Filled Tonal
        </Button>
        <Button disabled variant="outlined">
          Outlined
        </Button>
        <Button disabled variant="text">
          Text
        </Button>
      </div>

      <h2>Sizes</h2>

      <h2>Start/End Icon</h2>
      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button
          variant="elevated"
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-[1em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          }
        >
          Elevated
        </Button>
        <Button
          variant="filled"
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-[1em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          }
        >
          Filled
        </Button>
      </div>
    </div>
  );
}
