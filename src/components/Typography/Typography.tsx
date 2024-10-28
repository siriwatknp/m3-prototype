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

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * @default body-medium
   */
  variant?: TypographyVariant;
  color?: TypographyColor;
  component?: keyof JSX.IntrinsicElements;
  underline?: TypographyUnderline;
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant = "body-medium",
      color,
      component,
      underline,
      ...props
    },
    ref
  ) => {
    const Component = component || "div";

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
      />
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
