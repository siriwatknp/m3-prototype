import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import "./Typography.css";

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

export interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @default body-medium
   */
  variant?: TypographyVariant;
  color?: TypographyColor;
  component?: keyof JSX.IntrinsicElements;
}

const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant = "body-medium", color, component, ...props }, ref) => {
    const Component = (component || "div") as "div";

    return (
      <Component
        ref={ref}
        className={cn(
          "MuiTypography-root",
          `MuiTypography-${variant}`,
          color && `MuiTypography-${color}`,
          className
        )}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
