"use client";

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  Span,
  Link,
} from "@/components/Typography2/Typography2";
import { Leva } from "leva";
import { useLevaOverrides } from "@/hooks/useLevaOverrides";
import NextLink from "next/link";
import { type Typography2Variant } from "@/components/Typography2/Typography2";
import Button from "@/components/Button/Button";

// Define the variants array
const variants: Typography2Variant[] = [
  "display-large",
  "display-medium",
  "display-small",
  "headline-large",
  "headline-medium",
  "headline-small",
  "title-large",
  "title-medium",
  "title-small",
  "label-large",
  "label-medium",
  "label-small",
  "body-large",
  "body-medium",
  "body-small",
];

const defaultValues = {
  // Display Large
  "--md-comp-typography-display-large-font": "Roboto",
  "--md-comp-typography-display-large-weight": "400",
  "--md-comp-typography-display-large-size": "57px",
  "--md-comp-typography-display-large-line-height": "64px",
  "--md-comp-typography-display-large-tracking": "-0.25px",

  // Display Medium
  "--md-comp-typography-display-medium-font": "Roboto",
  "--md-comp-typography-display-medium-weight": "400",
  "--md-comp-typography-display-medium-size": "45px",
  "--md-comp-typography-display-medium-line-height": "52px",
  "--md-comp-typography-display-medium-tracking": "0px",

  // Display Small
  "--md-comp-typography-display-small-font": "Roboto",
  "--md-comp-typography-display-small-weight": "400",
  "--md-comp-typography-display-small-size": "36px",
  "--md-comp-typography-display-small-line-height": "44px",
  "--md-comp-typography-display-small-tracking": "0px",

  // Headline Large
  "--md-comp-typography-headline-large-font": "Roboto",
  "--md-comp-typography-headline-large-weight": "400",
  "--md-comp-typography-headline-large-size": "32px",
  "--md-comp-typography-headline-large-line-height": "40px",
  "--md-comp-typography-headline-large-tracking": "0px",

  // Headline Medium
  "--md-comp-typography-headline-medium-font": "Roboto",
  "--md-comp-typography-headline-medium-weight": "400",
  "--md-comp-typography-headline-medium-size": "28px",
  "--md-comp-typography-headline-medium-line-height": "36px",
  "--md-comp-typography-headline-medium-tracking": "0px",

  // Headline Small
  "--md-comp-typography-headline-small-font": "Roboto",
  "--md-comp-typography-headline-small-weight": "400",
  "--md-comp-typography-headline-small-size": "24px",
  "--md-comp-typography-headline-small-line-height": "32px",
  "--md-comp-typography-headline-small-tracking": "0px",

  // Title Large
  "--md-comp-typography-title-large-font": "Roboto",
  "--md-comp-typography-title-large-weight": "400",
  "--md-comp-typography-title-large-size": "22px",
  "--md-comp-typography-title-large-line-height": "28px",
  "--md-comp-typography-title-large-tracking": "0px",

  // Title Medium
  "--md-comp-typography-title-medium-font": "Roboto",
  "--md-comp-typography-title-medium-weight": "500",
  "--md-comp-typography-title-medium-size": "16px",
  "--md-comp-typography-title-medium-line-height": "24px",
  "--md-comp-typography-title-medium-tracking": "0.15px",

  // Title Small
  "--md-comp-typography-title-small-font": "Roboto",
  "--md-comp-typography-title-small-weight": "500",
  "--md-comp-typography-title-small-size": "14px",
  "--md-comp-typography-title-small-line-height": "20px",
  "--md-comp-typography-title-small-tracking": "0.1px",

  // Label Large
  "--md-comp-typography-label-large-font": "Roboto",
  "--md-comp-typography-label-large-weight": "500",
  "--md-comp-typography-label-large-size": "14px",
  "--md-comp-typography-label-large-line-height": "20px",
  "--md-comp-typography-label-large-tracking": "0.1px",

  // Label Medium
  "--md-comp-typography-label-medium-font": "Roboto",
  "--md-comp-typography-label-medium-weight": "500",
  "--md-comp-typography-label-medium-size": "12px",
  "--md-comp-typography-label-medium-line-height": "16px",
  "--md-comp-typography-label-medium-tracking": "0.5px",

  // Label Small
  "--md-comp-typography-label-small-font": "Roboto",
  "--md-comp-typography-label-small-weight": "500",
  "--md-comp-typography-label-small-size": "11px",
  "--md-comp-typography-label-small-line-height": "16px",
  "--md-comp-typography-label-small-tracking": "0.5px",

  // Body Large
  "--md-comp-typography-body-large-font": "Roboto",
  "--md-comp-typography-body-large-weight": "400",
  "--md-comp-typography-body-large-size": "16px",
  "--md-comp-typography-body-large-line-height": "24px",
  "--md-comp-typography-body-large-tracking": "0.5px",

  // Body Medium
  "--md-comp-typography-body-medium-font": "Roboto",
  "--md-comp-typography-body-medium-weight": "400",
  "--md-comp-typography-body-medium-size": "14px",
  "--md-comp-typography-body-medium-line-height": "20px",
  "--md-comp-typography-body-medium-tracking": "0.25px",

  // Body Small
  "--md-comp-typography-body-small-font": "Roboto",
  "--md-comp-typography-body-small-weight": "400",
  "--md-comp-typography-body-small-size": "12px",
  "--md-comp-typography-body-small-line-height": "16px",
  "--md-comp-typography-body-small-tracking": "0.4px",

  // Colors
  "--md-comp-typography-color-primary": "var(--md-sys-color-primary)",
  "--md-comp-typography-color-secondary": "var(--md-sys-color-secondary)",
  "--md-comp-typography-color-tertiary": "var(--md-sys-color-tertiary)",
  "--md-comp-typography-color-error": "var(--md-sys-color-error)",
  "--md-comp-typography-color-on-surface": "var(--md-sys-color-on-surface)",
} as const;

const typographyFolders: Record<string, string[]> = {
  "display large": [
    "--md-comp-typography-display-large-font",
    "--md-comp-typography-display-large-weight",
    "--md-comp-typography-display-large-size",
    "--md-comp-typography-display-large-line-height",
    "--md-comp-typography-display-large-tracking",
  ],
  "display medium": [
    "--md-comp-typography-display-medium-font",
    "--md-comp-typography-display-medium-weight",
    "--md-comp-typography-display-medium-size",
    "--md-comp-typography-display-medium-line-height",
    "--md-comp-typography-display-medium-tracking",
  ],
  "display small": [
    "--md-comp-typography-display-small-font",
    "--md-comp-typography-display-small-weight",
    "--md-comp-typography-display-small-size",
    "--md-comp-typography-display-small-line-height",
    "--md-comp-typography-display-small-tracking",
  ],
  "headline large": [
    "--md-comp-typography-headline-large-font",
    "--md-comp-typography-headline-large-weight",
    "--md-comp-typography-headline-large-size",
    "--md-comp-typography-headline-large-line-height",
    "--md-comp-typography-headline-large-tracking",
  ],
  "headline medium": [
    "--md-comp-typography-headline-medium-font",
    "--md-comp-typography-headline-medium-weight",
    "--md-comp-typography-headline-medium-size",
    "--md-comp-typography-headline-medium-line-height",
    "--md-comp-typography-headline-medium-tracking",
  ],
  "headline small": [
    "--md-comp-typography-headline-small-font",
    "--md-comp-typography-headline-small-weight",
    "--md-comp-typography-headline-small-size",
    "--md-comp-typography-headline-small-line-height",
    "--md-comp-typography-headline-small-tracking",
  ],
  "title large": [
    "--md-comp-typography-title-large-font",
    "--md-comp-typography-title-large-weight",
    "--md-comp-typography-title-large-size",
    "--md-comp-typography-title-large-line-height",
    "--md-comp-typography-title-large-tracking",
  ],
  "title medium": [
    "--md-comp-typography-title-medium-font",
    "--md-comp-typography-title-medium-weight",
    "--md-comp-typography-title-medium-size",
    "--md-comp-typography-title-medium-line-height",
    "--md-comp-typography-title-medium-tracking",
  ],
  "title small": [
    "--md-comp-typography-title-small-font",
    "--md-comp-typography-title-small-weight",
    "--md-comp-typography-title-small-size",
    "--md-comp-typography-title-small-line-height",
    "--md-comp-typography-title-small-tracking",
  ],
  "label large": [
    "--md-comp-typography-label-large-font",
    "--md-comp-typography-label-large-weight",
    "--md-comp-typography-label-large-size",
    "--md-comp-typography-label-large-line-height",
    "--md-comp-typography-label-large-tracking",
  ],
  "label medium": [
    "--md-comp-typography-label-medium-font",
    "--md-comp-typography-label-medium-weight",
    "--md-comp-typography-label-medium-size",
    "--md-comp-typography-label-medium-line-height",
    "--md-comp-typography-label-medium-tracking",
  ],
  "label small": [
    "--md-comp-typography-label-small-font",
    "--md-comp-typography-label-small-weight",
    "--md-comp-typography-label-small-size",
    "--md-comp-typography-label-small-line-height",
    "--md-comp-typography-label-small-tracking",
  ],
  "body large": [
    "--md-comp-typography-body-large-font",
    "--md-comp-typography-body-large-weight",
    "--md-comp-typography-body-large-size",
    "--md-comp-typography-body-large-line-height",
    "--md-comp-typography-body-large-tracking",
  ],
  "body medium": [
    "--md-comp-typography-body-medium-font",
    "--md-comp-typography-body-medium-weight",
    "--md-comp-typography-body-medium-size",
    "--md-comp-typography-body-medium-line-height",
    "--md-comp-typography-body-medium-tracking",
  ],
  "body small": [
    "--md-comp-typography-body-small-font",
    "--md-comp-typography-body-small-weight",
    "--md-comp-typography-body-small-size",
    "--md-comp-typography-body-small-line-height",
    "--md-comp-typography-body-small-tracking",
  ],
  colors: [
    "--md-comp-typography-color-primary",
    "--md-comp-typography-color-secondary",
    "--md-comp-typography-color-tertiary",
    "--md-comp-typography-color-error",
    "--md-comp-typography-color-on-surface",
  ],
};

export default function Page() {
  useLevaOverrides(defaultValues, {
    dataAttribute: "data-typography2-override",
    folders: typographyFolders,
  });

  return (
    <div className="prose dark:prose-invert max-w-[700px] mx-auto py-5 px-2">
      <Leva oneLineLabels />
      <h1>Typography Example (Version 2)</h1>

      <h2>All Variants</h2>
      <div
        data-typography2-override
        className="not-prose flex flex-col gap-4 rounded-lg border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800"
      >
        <H1>display-large - The quick brown fox jumps.</H1>
        <H1 variant="display-medium">
          display-medium - The quick brown fox jumps.
        </H1>
        <H1 variant="display-small">
          display-small - The quick brown fox jumps.
        </H1>
        <H1>headline-large - The quick brown fox jumps.</H1>
        <H2>headline-medium - The quick brown fox jumps.</H2>
        <H3>headline-small - The quick brown fox jumps.</H3>
        <H4>title-large - The quick brown fox jumps.</H4>
        <H5>title-medium - The quick brown fox jumps.</H5>
        <H6>title-small - The quick brown fox jumps.</H6>
        <Span variant="label-large">
          label-large - The quick brown fox jumps.
        </Span>
        <Span variant="label-medium">
          label-medium - The quick brown fox jumps.
        </Span>
        <Span variant="label-small">
          label-small - The quick brown fox jumps.
        </Span>
        <Span variant="body-large">
          body-large - The quick brown fox jumps.
        </Span>
        <Span>body-medium - The quick brown fox jumps.</Span>
        <Span variant="body-small">
          body-small - The quick brown fox jumps.
        </Span>
      </div>

      <h2>Semantic Elements</h2>
      <div className="not-prose flex flex-col gap-4 rounded-lg border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800">
        <H1 variant="headline-large">Heading 1</H1>
        <Span variant="body-large" component="p">
          Paragraph with body-large style
        </Span>
        <Span variant="label-medium" component="label">
          Label text
        </Span>
      </div>

      <h2>Colors</h2>
      <div className="not-prose flex flex-col gap-4 rounded-lg border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800">
        <H3 variant="headline-small" color="primary">
          Primary Color Text
        </H3>
        <H3 variant="headline-small" color="secondary">
          Secondary Color Text
        </H3>
        <H3 variant="headline-small" color="tertiary">
          Tertiary Color Text
        </H3>
        <H3 variant="headline-small" color="error">
          Error Color Text
        </H3>
        <H3 variant="headline-small" color="on-surface">
          On Surface Color Text
        </H3>
      </div>

      <h2>Link Underline</h2>
      <div className="not-prose flex flex-col gap-4 rounded-lg border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800">
        <Link href="#" underline="none">
          No underline link
        </Link>
        <Link href="#" underline="hover">
          Hover underline link
        </Link>
        <Link href="#" underline="always">
          Always underline link
        </Link>
        <Paragraph variant="body-medium">
          By clicking "Accept", you agree to our{" "}
          <Link
            href="/terms"
            color="error"
            underline="hover"
            variant="body-large"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" color="error">
            Privacy Policy
          </Link>
        </Paragraph>
      </div>

      <h2>Display</h2>
      <div className="not-prose flex flex-col gap-4 rounded-lg border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800">
        <H2 color="primary" variant="display-small">
          Cortado iced
        </H2>

        <Paragraph>
          Enter my new flame: the iced cortado. A cortado is an espresso with an
          equal amount of steamed milk. I drink it when I want a caffeine
          pick-me-up without the bitterness or acidity of pure espresso.
        </Paragraph>

        <hr className="mt-2 border-t border-slate-200 dark:border-slate-600" />

        <Button variant="text" className="w-fit">
          Expand
        </Button>
      </div>

      <h2>Label</h2>
      <div className="not-prose flex flex-col gap-4 rounded-lg border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="space-y-4">
          <Span variant="label-large" color="secondary" className="mb-4">
            Shop popular categories:
          </Span>

          <div className="flex flex-wrap gap-3">
            {/* Category Pills */}
            <button className="rounded-md border border-gray-200 px-3 hover:bg-gray-50">
              <Span variant="label-medium">Cameras</Span>
            </button>

            <button className="rounded-md bg-[#EEF1FF] px-3 flex items-center gap-2">
              <Span variant="label-medium">Game consoles</Span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </button>

            <button className="rounded-md border border-gray-200 px-3 hover:bg-gray-50">
              <Span variant="label-medium">Laptops</Span>
            </button>

            <button className="rounded-md border border-gray-200 px-3 hover:bg-gray-50">
              <Span variant="label-medium">Phones</Span>
            </button>

            <button className="rounded-md border border-gray-200 px-3 hover:bg-gray-50">
              <Span variant="label-medium">Tablets</Span>
            </button>
          </div>
        </div>
      </div>

      <h2>Navigation</h2>
      <div className="not-prose flex flex-col gap-4 rounded-lg border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800">
        <nav className="bg-white dark:bg-gray-800 p-4 rounded-lg">
          <ul className="flex justify-between items-center">
            {/* News */}
            <li>
              <button className="flex flex-col items-center gap-2 group">
                <div className="bg-[#EEF1FF] dark:bg-indigo-900/50 p-3 rounded-full">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-indigo-700 dark:text-indigo-300"
                    fill="currentColor"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <Span
                  variant="label-medium"
                  className="text-gray-700 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                >
                  News
                </Span>
              </button>
            </li>

            {/* Global */}
            <li>
              <button className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <Span
                  variant="label-medium"
                  className="text-gray-700 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                >
                  Global
                </Span>
              </button>
            </li>

            {/* For You */}
            <li>
              <button className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <Span
                  variant="label-medium"
                  className="text-gray-700 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                >
                  For You
                </Span>
              </button>
            </li>

            {/* Trending */}
            <li>
              <button className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                    fill="currentColor"
                  >
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                  </svg>
                </div>
                <Span
                  variant="label-medium"
                  className="text-gray-700 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                >
                  Trending
                </Span>
              </button>
            </li>

            {/* Archive */}
            <li>
              <button className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                    fill="currentColor"
                  >
                    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
                  </svg>
                </div>
                <Span
                  variant="label-medium"
                  className="text-gray-700 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"
                >
                  Archive
                </Span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
