import React, { forwardRef } from "react";
import styles from "./FloatingLabel.module.css";

interface FloatingLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  shrink?: boolean;
}

const FloatingLabel = forwardRef<HTMLLabelElement, FloatingLabelProps>(
  ({ children, className, shrink = false, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`FloatingLabel ${styles.root} ${
          shrink ? styles.shrink : ""
        } ${className || ""}`}
        {...props}
      >
        {children}
      </label>
    );
  }
);

FloatingLabel.displayName = "FloatingLabel";

export default FloatingLabel;
