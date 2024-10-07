import React, { forwardRef } from "react";
import styles from "./FormHelperText.module.css";

interface FormHelperTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  // Add any additional props you need here
}

const FormHelperText = forwardRef<HTMLParagraphElement, FormHelperTextProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`FormHelperText ${styles.root} ${className || ""}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

FormHelperText.displayName = "FormHelperText";

export default FormHelperText;
