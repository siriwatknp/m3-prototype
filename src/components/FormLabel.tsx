import React, { forwardRef } from "react";
import styles from "./FormLabel.module.css";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  // Add any additional props you need here
}

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`FormLabel ${styles.root} ${className || ""}`}
        {...props}
      >
        {children}
      </label>
    );
  }
);

FormLabel.displayName = "FormLabel";

export default FormLabel;
