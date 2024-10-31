import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type Typography2Variant =
  | "display-large"
  | "display-medium"
  | "display-small"
  | "headline-large"
  | "headline-medium"
  | "headline-small"
  | "title-large"
  | "title-medium"
  | "title-small"
  | "label-large"
  | "label-medium"
  | "label-small"
  | "body-large"
  | "body-medium"
  | "body-small";

export type Typography2Color =
  | "primary"
  | "secondary"
  | "tertiary"
  | "error"
  | "on-surface";

export type Typography2Underline = "none" | "hover" | "always";

export interface Typography2Props {
  variant?: Typography2Variant;
  color?: Typography2Color;
  component?: keyof JSX.IntrinsicElements;
  underline?: Typography2Underline;
  children?: React.ReactNode;
  className?: string;
}

function createText<Element = HTMLElement>(
  semantic: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a",
  name: string
) {
  const semanticToVariant = {
    h1: "headline-large",
    h2: "headline-medium",
    h3: "headline-small",
    h4: "title-large",
    h5: "title-medium",
    h6: "title-small",
    p: "body-medium",
    span: "inline",
    a: "inline",
  } as const;
  const Typography2 = forwardRef<
    Element,
    Typography2Props & JSX.IntrinsicElements[typeof semantic]
  >(
    (
      {
        className,
        variant = semanticToVariant[semantic],
        color,
        underline = semantic === "a" ? "always" : undefined,
        component,
        children,
        ...props
      },
      ref
    ) => {
      const Component = (component || semantic) as any;

      return (
        <Component
          ref={ref}
          className={cn(
            "MuiTypography2-root",
            `MuiTypography2-${variant}`,
            color && `MuiTypography2-${color}`,
            underline && `MuiTypography2-underline-${underline}`,
            className
          )}
          {...props}
        >
          {children}
        </Component>
      );
    }
  );

  Typography2.displayName = name;
  return Typography2;
}

export const H1 = createText<HTMLHeadingElement>("h1", "H1");
export const H2 = createText<HTMLHeadingElement>("h2", "H2");
export const H3 = createText<HTMLHeadingElement>("h3", "H3");
export const H4 = createText<HTMLHeadingElement>("h4", "H4");
export const H5 = createText<HTMLHeadingElement>("h5", "H5");
export const H6 = createText<HTMLHeadingElement>("h6", "H6");
export const Paragraph = createText<HTMLParagraphElement>("p", "Paragraph");
export const Span = createText<HTMLSpanElement>("span", "Span");
export const Link = createText<HTMLAnchorElement>("a", "Link");
