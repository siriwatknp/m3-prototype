import React, { forwardRef } from "react";
import styles from "./Input.module.css";
import InputAdornment from "./InputAdornment";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add any additional props you need here
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      placeholder,
      startAdornment,
      endAdornment,
      disabled,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`Input ${styles.root} ${className || ""}`}>
        {startAdornment && (
          <InputAdornment data-first-child>{startAdornment}</InputAdornment>
        )}
        <input ref={ref} className={styles.input} {...props} />
        {endAdornment && (
          <InputAdornment data-last-child>{endAdornment}</InputAdornment>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
