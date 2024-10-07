"use client";
import React, { forwardRef, useId } from "react";
import inputStyles from "./Input.module.css";
import styles from "./FilledInput.module.css";
import InputAdornment from "./InputAdornment";

interface FilledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add any additional props you need here
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  label: string;
}

const FilledInput = forwardRef<HTMLInputElement, FilledInputProps>(
  (
    {
      label,
      className,
      placeholder = "",
      startAdornment,
      endAdornment,
      disabled,
      error,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const wrapperRef = React.useRef(null);
    const inputRef = React.useRef<null | HTMLInputElement>(null);
    const handleWrapperClick = (event: React.MouseEvent) => {
      const target = event.target;
      if (target === wrapperRef.current && inputRef.current) {
        inputRef.current.focus();
      }
    };
    return (
      <div
        className={`FilledInput ${inputStyles.root} ${styles.root} ${
          error ? "Mui-error" : ""
        } ${className || ""}`}
        ref={wrapperRef}
        onClick={handleWrapperClick}
      >
        {startAdornment && (
          <InputAdornment data-first-child>{startAdornment}</InputAdornment>
        )}
        <label htmlFor={id} className={inputStyles.floatingLabel}>
          {label}
        </label>
        <input
          ref={inputRef}
          id={id}
          className={inputStyles.input}
          placeholder={placeholder}
          {...props}
        />
        <div className={styles.activeIndicator} />
        {endAdornment && (
          <InputAdornment data-last-child>{endAdornment}</InputAdornment>
        )}
      </div>
    );
  }
);

FilledInput.displayName = "FilledInput";

export default FilledInput;
