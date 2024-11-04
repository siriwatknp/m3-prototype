import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type TypographyVariant =
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

export type TypographyColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "error"
  | "on-surface";

export type TypographyUnderline = "none" | "hover" | "always";

function createText<Element = HTMLElement>(
  semantic:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "a"
    | "div",
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
    div: "body-medium",
  } as const;
  const Typography = forwardRef<
    Element,
    TypographyProps & JSX.IntrinsicElements[typeof semantic]
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
            "MuiTypography-root",
            `MuiTypography-${variant}`,
            color && `MuiTypography-${color}`,
            underline && `MuiTypography-underline-${underline}`,
            className
          )}
          {...props}
        >
          {children}
        </Component>
      );
    }
  );

  Typography.displayName = name;
  return Typography;
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

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * @default body-medium
   */
  variant?: TypographyVariant;
  color?: TypographyColor;
  component?: keyof JSX.IntrinsicElements;
  underline?: TypographyUnderline;
}

const Typography = createText<HTMLDivElement>("div", "Typography");

export default Typography;
