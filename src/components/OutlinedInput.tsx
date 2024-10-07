"use client";
import React, { forwardRef, useId } from "react";
import styles from "./OutlinedInput.module.css";
import inputStyles from "./Input.module.css";
import InputAdornment from "./InputAdornment";

interface OutlinedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add any additional props you need here
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  label: string;
}

const OutlinedInput = forwardRef<HTMLInputElement, OutlinedInputProps>(
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
    const withLabel = label != null && label !== "";
    return (
      <div
        className={`OutlinedInput ${inputStyles.root} ${styles.root} ${
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
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>
            {/* Use the nominal use case of the legend, avoid rendering artefacts. */}
            {withLabel ? (
              label
            ) : (
              // notranslate needed while Google Translate will not fix zero-width space issue
              <span className="notranslate">&#8203;</span>
            )}
          </legend>
        </fieldset>
        {endAdornment && (
          <InputAdornment data-last-child>{endAdornment}</InputAdornment>
        )}
      </div>
    );
  }
);

OutlinedInput.displayName = "OutlinedInput";

export default OutlinedInput;
