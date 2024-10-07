import React, { forwardRef } from "react";
import styles from "./InputAdornment.module.css";

interface InputAdornmentProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "start" | "end";
  disablePointerEvents?: boolean;
}

const InputAdornment = forwardRef<HTMLDivElement, InputAdornmentProps>(
  (
    { children, className, position, disablePointerEvents = false, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`InputAdornment ${styles.root} ${className || ""}`}
        {...(position === "start" && { "data-first-child": "" })}
        {...(position === "end" && { "data-last-child": "" })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

InputAdornment.displayName = "InputAdornment";

export default InputAdornment;
