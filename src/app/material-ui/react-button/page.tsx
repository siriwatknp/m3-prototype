"use client";

import Button from "@/components/Button/Button";
import { Leva, useControls, folder } from "leva";
import { useEffect } from "react";

function useButtonOverrides() {
  const defaultValues = {
    "--md-comp-button-transition":
      "var(--md-sys-motion-easing-standard) var(--md-ref-motion-duration-medium1)",
    "--md-comp-button-corner": "var(--md-sys-shape-corner-full)",

    // Medium Button
    "--md-comp-button-medium-height": "var(--md-ref-spacing-10)",
    "--md-comp-button-medium-padding-inline": "var(--md-ref-spacing-6)",
    "--md-comp-button-medium-gap": "var(--md-ref-spacing-2)",
    "--md-comp-button-medium-font-size":
      "var(--md-sys-typescale-label-large-size)",
    // Small Button
    "--md-comp-button-small-height": "var(--md-ref-spacing-7)",
    "--md-comp-button-small-padding-inline": "var(--md-ref-spacing-5)",
    "--md-comp-button-small-gap": "var(--md-ref-spacing-2)",
    "--md-comp-button-small-font-size":
      "var(--md-sys-typescale-label-medium-size)",
    // Large Button
    "--md-comp-button-large-height": "var(--md-ref-spacing-9)",
    "--md-comp-button-large-padding-inline": "var(--md-ref-spacing-7)",
    "--md-comp-button-large-gap": "var(--md-ref-spacing-2)",
    "--md-comp-button-large-font-size": "var(--md-ref-typeface-size-4)",

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
    "--md-comp-button-corner": {
      value: defaultValues["--md-comp-button-corner"],
    },
    "--md-comp-button-transition": {
      value: defaultValues["--md-comp-button-transition"],
    },
    "size: small": folder({
      "--md-comp-button-small-height": {
        value: defaultValues["--md-comp-button-small-height"],
      },
      "--md-comp-button-small-padding-inline": {
        value: defaultValues["--md-comp-button-small-padding-inline"],
      },
      "--md-comp-button-small-gap": {
        value: defaultValues["--md-comp-button-small-gap"],
      },
      "--md-comp-button-small-font-size": {
        value: defaultValues["--md-comp-button-small-font-size"],
      },
    }),
    "size: medium": folder({
      "--md-comp-button-medium-height": {
        value: defaultValues["--md-comp-button-medium-height"],
      },
      "--md-comp-button-medium-padding-inline": {
        value: defaultValues["--md-comp-button-medium-padding-inline"],
      },
      "--md-comp-button-medium-gap": {
        value: defaultValues["--md-comp-button-medium-gap"],
      },
      "--md-comp-button-medium-font-size": {
        value: defaultValues["--md-comp-button-medium-font-size"],
      },
    }),
    "size: large": folder({
      "--md-comp-button-large-height": {
        value: defaultValues["--md-comp-button-large-height"],
      },
      "--md-comp-button-large-padding-inline": {
        value: defaultValues["--md-comp-button-large-padding-inline"],
      },
      "--md-comp-button-large-gap": {
        value: defaultValues["--md-comp-button-large-gap"],
      },
      "--md-comp-button-large-font-size": {
        value: defaultValues["--md-comp-button-large-font-size"],
      },
    }),
    "variant: elevated": folder({
      "--md-comp-button-elevated-shadow": {
        value: defaultValues["--md-comp-button-elevated-shadow"],
      },
      "--md-comp-button-elevated-color": {
        value: defaultValues["--md-comp-button-elevated-color"],
      },
      "--md-comp-button-elevated-background": {
        value: defaultValues["--md-comp-button-elevated-background"],
      },
      "--md-comp-button-elevated-hover-shadow": {
        value: defaultValues["--md-comp-button-elevated-hover-shadow"],
      },
      "--md-comp-button-elevated-hover-background": {
        value: defaultValues["--md-comp-button-elevated-hover-background"],
      },
      "--md-comp-button-elevated-focus-shadow": {
        value: defaultValues["--md-comp-button-elevated-focus-shadow"],
      },
      "--md-comp-button-elevated-focus-background": {
        value: defaultValues["--md-comp-button-elevated-focus-background"],
      },
      "--md-comp-button-elevated-active-shadow": {
        value: defaultValues["--md-comp-button-elevated-active-shadow"],
      },
      "--md-comp-button-elevated-active-background": {
        value: defaultValues["--md-comp-button-elevated-active-background"],
      },
      "--md-comp-button-elevated-disabled-color": {
        value: defaultValues["--md-comp-button-elevated-disabled-color"],
      },
      "--md-comp-button-elevated-disabled-background": {
        value: defaultValues["--md-comp-button-elevated-disabled-background"],
      },
      "--md-comp-button-elevated-disabled-shadow": {
        value: defaultValues["--md-comp-button-elevated-disabled-shadow"],
      },
    }),
    "variant: filled": folder({
      "--md-comp-button-filled-shadow": {
        value: defaultValues["--md-comp-button-filled-shadow"],
      },
      "--md-comp-button-filled-background": {
        value: defaultValues["--md-comp-button-filled-background"],
      },
      "--md-comp-button-filled-color": {
        value: defaultValues["--md-comp-button-filled-color"],
      },
      "--md-comp-button-filled-hover-shadow": {
        value: defaultValues["--md-comp-button-filled-hover-shadow"],
      },
      "--md-comp-button-filled-hover-background": {
        value: defaultValues["--md-comp-button-filled-hover-background"],
      },
      "--md-comp-button-filled-focus-shadow": {
        value: defaultValues["--md-comp-button-filled-focus-shadow"],
      },
      "--md-comp-button-filled-focus-background": {
        value: defaultValues["--md-comp-button-filled-focus-background"],
      },
      "--md-comp-button-filled-active-shadow": {
        value: defaultValues["--md-comp-button-filled-active-shadow"],
      },
      "--md-comp-button-filled-active-background": {
        value: defaultValues["--md-comp-button-filled-active-background"],
      },
      "--md-comp-button-filled-disabled-color": {
        value: defaultValues["--md-comp-button-filled-disabled-color"],
      },
      "--md-comp-button-filled-disabled-background": {
        value: defaultValues["--md-comp-button-filled-disabled-background"],
      },
      "--md-comp-button-filled-disabled-shadow": {
        value: defaultValues["--md-comp-button-filled-disabled-shadow"],
      },
    }),
    "variant: filledTonal": folder({
      "--md-comp-button-filled-tonal-shadow": {
        value: defaultValues["--md-comp-button-filled-tonal-shadow"],
      },
      "--md-comp-button-filled-tonal-background": {
        value: defaultValues["--md-comp-button-filled-tonal-background"],
      },
      "--md-comp-button-filled-tonal-color": {
        value: defaultValues["--md-comp-button-filled-tonal-color"],
      },
      "--md-comp-button-filledTonal-hover-shadow": {
        value: defaultValues["--md-comp-button-filledTonal-hover-shadow"],
      },
      "--md-comp-button-filledTonal-hover-background": {
        value: defaultValues["--md-comp-button-filledTonal-hover-background"],
      },
      "--md-comp-button-filledTonal-focus-shadow": {
        value: defaultValues["--md-comp-button-filledTonal-focus-shadow"],
      },
      "--md-comp-button-filledTonal-focus-background": {
        value: defaultValues["--md-comp-button-filledTonal-focus-background"],
      },
      "--md-comp-button-filledTonal-active-shadow": {
        value: defaultValues["--md-comp-button-filledTonal-active-shadow"],
      },
      "--md-comp-button-filledTonal-active-background": {
        value: defaultValues["--md-comp-button-filledTonal-active-background"],
      },
      "--md-comp-button-filledTonal-disabled-color": {
        value: defaultValues["--md-comp-button-filledTonal-disabled-color"],
      },
      "--md-comp-button-filledTonal-disabled-background": {
        value:
          defaultValues["--md-comp-button-filledTonal-disabled-background"],
      },
      "--md-comp-button-filledTonal-disabled-shadow": {
        value: defaultValues["--md-comp-button-filledTonal-disabled-shadow"],
      },
    }),
    "variant: text": folder({
      "--md-comp-button-text-background": {
        value: defaultValues["--md-comp-button-text-background"],
      },
      "--md-comp-button-text-color": {
        value: defaultValues["--md-comp-button-text-color"],
      },
      "--md-comp-button-text-hover-background": {
        value: defaultValues["--md-comp-button-text-hover-background"],
      },
      "--md-comp-button-text-focus-background": {
        value: defaultValues["--md-comp-button-text-focus-background"],
      },
      "--md-comp-button-text-active-background": {
        value: defaultValues["--md-comp-button-text-active-background"],
      },
      "--md-comp-button-text-disabled-color": {
        value: defaultValues["--md-comp-button-text-disabled-color"],
      },
      "--md-comp-button-text-disabled-background": {
        value: defaultValues["--md-comp-button-text-disabled-background"],
      },
      "--md-comp-button-text-disabled-shadow": {
        value: defaultValues["--md-comp-button-text-disabled-shadow"],
      },
    }),
    "variant: outlined": folder({
      "--md-comp-button-outlined-border-color": {
        value: defaultValues["--md-comp-button-outlined-border-color"],
      },
      "--md-comp-button-outlined-color": {
        value: defaultValues["--md-comp-button-outlined-color"],
      },
      "--md-comp-button-outlined-background": {
        value: defaultValues["--md-comp-button-outlined-background"],
      },
      "--md-comp-button-outlined-hover-border-color": {
        value: defaultValues["--md-comp-button-outlined-hover-border-color"],
      },
      "--md-comp-button-outlined-hover-background": {
        value: defaultValues["--md-comp-button-outlined-hover-background"],
      },
      "--md-comp-button-outlined-focus-border-color": {
        value: defaultValues["--md-comp-button-outlined-focus-border-color"],
      },
      "--md-comp-button-outlined-focus-background": {
        value: defaultValues["--md-comp-button-outlined-focus-background"],
      },
      "--md-comp-button-outlined-active-border-color": {
        value: defaultValues["--md-comp-button-outlined-active-border-color"],
      },
      "--md-comp-button-outlined-active-background": {
        value: defaultValues["--md-comp-button-outlined-active-background"],
      },
      "--md-comp-button-outlined-disabled-color": {
        value: defaultValues["--md-comp-button-outlined-disabled-color"],
      },
      "--md-comp-button-outlined-disabled-background": {
        value: defaultValues["--md-comp-button-outlined-disabled-background"],
      },
      "--md-comp-button-outlined-disabled-border-color": {
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
        if (value === defaultValues[key as keyof typeof defaultValues]) {
          // the value is the same as default
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
  useButtonOverrides();
  return (
    <div className="prose dark:prose-invert max-w-[700px] mx-auto py-5 px-2">
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
        className="grid grid-cols-[repeat(5,max-content)] border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4"
      >
        <div>
          <Button size="small" variant="elevated">
            Elevated
          </Button>
        </div>
        <div>
          <Button size="small" variant="filled">
            Filled
          </Button>
        </div>
        <div>
          <Button size="small" variant="filledTonal">
            Filled Tonal
          </Button>
        </div>
        <div>
          <Button size="small" variant="outlined">
            Outlined
          </Button>
        </div>
        <div>
          <Button size="small" variant="text">
            Text
          </Button>
        </div>

        <div>
          <Button variant="elevated">Elevated</Button>
        </div>
        <div>
          <Button variant="filled">Filled</Button>
        </div>
        <div>
          <Button variant="filledTonal">Filled Tonal</Button>
        </div>
        <div>
          <Button variant="outlined">Outlined</Button>
        </div>
        <div>
          <Button variant="text">Text</Button>
        </div>

        <div>
          <Button size="large" variant="elevated">
            Elevated
          </Button>
        </div>
        <div>
          <Button size="large" variant="filled">
            Filled
          </Button>
        </div>
        <div>
          <Button size="large" variant="filledTonal">
            Filled Tonal
          </Button>
        </div>
        <div>
          <Button size="large" variant="outlined">
            Outlined
          </Button>
        </div>
        <div>
          <Button size="large" variant="text">
            Text
          </Button>
        </div>
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
      <div className="flex rounded-lg justify-center border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800 gap-4">
        <Button size="small" variant="filled">
          Small
        </Button>
        <Button size="medium" variant="filled">
          Medium
        </Button>
        <Button size="large" variant="filled">
          Large
        </Button>
      </div>

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
          size="small"
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
        <Button
          size="large"
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
