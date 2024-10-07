import React, { forwardRef, useId } from "react";
import styles from "./TextField.module.css";
import FormControl from "./FormControl";
import Input from "./Input";
import FormLabel from "./FormLabel";
import FormHelperText from "./FormHelperText";
import OutlinedInput from "./OutlinedInput";
import FilledInput from "./FilledInput";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "filled" | "outlined";
  label?: string;
  helperText?: React.ReactNode;
  placeholder?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
  value?: string;
  error?: boolean;
}

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      className,
      variant = "outlined",
      label = "",
      helperText,
      placeholder = "",
      disabled,
      startAdornment,
      endAdornment,
      value,
      error,
      ...other
    },
    ref
  ) => {
    const id = useId();
    return (
      <FormControl
        ref={ref}
        className={`TextField ${styles.root} ${className || ""}`}
      >
        {!variant && label && (
          <FormLabel className="MuiFormLabel-root" htmlFor={id}>
            {label}
          </FormLabel>
        )}
        {!variant && (
          <Input
            {...{
              placeholder,
              disabled,
              startAdornment,
              endAdornment,
              value,
              error,
            }}
          />
        )}
        {variant === "filled" && (
          <FilledInput
            {...{
              label,
              placeholder,
              disabled,
              startAdornment,
              endAdornment,
              value,
              error,
            }}
          />
        )}
        {variant === "outlined" && (
          <OutlinedInput
            {...{
              label,
              placeholder,
              disabled,
              startAdornment,
              endAdornment,
              value,
              error,
            }}
          />
        )}
        {helperText && (
          <FormHelperText className="FormHelperText-root">
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
