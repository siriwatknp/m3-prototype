"use client";

import Typography from "@/components/Typography/Typography";
import { Leva } from "leva";
import { useLevaOverrides } from "@/hooks/useLevaOverrides";
import { type TypographyVariant } from "@/components/Typography/Typography";
import Link from "next/link";

// Define the variants array
const variants: TypographyVariant[] = [
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
    dataAttribute: "data-typography-override",
    folders: typographyFolders,
  });

  return (
    <div className="prose dark:prose-invert max-w-[700px] mx-auto py-5 px-2">
      <Leva oneLineLabels />
      <h1>Typography Example</h1>

      <h2>All Variants</h2>
      <div
        data-typography-override
        className="not-prose flex flex-col gap-4 rounded-lg border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800"
      >
        {variants.map((variant) => (
          <Typography key={variant} variant={variant}>
            {variant} - The quick brown fox jumps.
          </Typography>
        ))}
      </div>

      <h2>Semantic Elements</h2>
      <div className="not-prose flex flex-col gap-4 rounded-lg border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800">
        <Typography variant="headline-large" component="h1">
          Heading 1
        </Typography>
        <Typography variant="body-large" component="p">
          Paragraph with body-large style
        </Typography>
        <Typography variant="label-medium" component="label">
          Label text
        </Typography>
      </div>

      <h2>Colors</h2>
      <div className="not-prose flex flex-col gap-4 rounded-lg border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800">
        <Typography variant="headline-small" color="primary">
          Primary Color Text
        </Typography>
        <Typography variant="headline-small" color="secondary">
          Secondary Color Text
        </Typography>
        <Typography variant="headline-small" color="tertiary">
          Tertiary Color Text
        </Typography>
        <Typography variant="headline-small" color="error">
          Error Color Text
        </Typography>
        <Typography variant="headline-small" color="on-surface">
          On Surface Color Text
        </Typography>
      </div>

      <h2>Link</h2>
      <div className="not-prose flex flex-col gap-4 rounded-lg border dark:border-slate-700 py-6 px-4 bg-slate-50 dark:bg-slate-800">
        <Typography>
          <Link href="#">Default Link</Link>
        </Typography>
        <Typography underline="none" color="primary">
          <Link href="#">No underline link</Link>
        </Typography>
        <Typography underline="hover" color="primary">
          <Link href="#">Hover underline link</Link>
        </Typography>
        <Typography underline="always" color="primary">
          <Link href="#">Always underline link</Link>
        </Typography>
        <Typography variant="body-small">
          By clicking "Accept", you agree to our{" "}
          <Typography underline="hover" color="error">
            <Link href="/terms">Terms of Service</Link>
          </Typography>{" "}
          and{" "}
          <Typography underline="hover" color="error">
            <Link href="/privacy">Privacy Policy</Link>
          </Typography>
        </Typography>
      </div>
    </div>
  );
}
