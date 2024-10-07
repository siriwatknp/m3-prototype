import React, { forwardRef } from "react";
import styles from "./FormControl.module.css";

interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add any additional props you need here
  error?: boolean;
}

const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  ({ children, className, error, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`FormControl ${styles.root} ${error ? "Mui-error" : ""} ${
          className || ""
        }`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FormControl.displayName = "FormControl";

export default FormControl;
