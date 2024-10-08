import React from "react";
import "./Button3.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "elevated" | "filled" | "filledTonal" | "outlined" | "text";
  color?: "secondary" | "tertiary" | "error";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  color,
  variant,
  onClick,
  startIcon,
  endIcon,
  ...other
}) => {
  return (
    <button
      className={`MuiButton-root ${variant ? `MuiButton-${variant}` : ""} ${
        color ? `MuiButton-${color}` : ""
      } ${className}`}
      onClick={onClick}
      {...other}
      style={
        {
          ...(variant === "elevated" &&
            color && {
              "--color": `var(--md-sys-color-${color})`,
            }),
          ...(variant === "filled" &&
            color && {
              "--color": `var(--md-sys-color-on-${color})`,
              "--background": `var(--md-sys-color-${color})`,
            }),
          ...(variant === "filledTonal" &&
            color && {
              "--color": `var(--md-sys-color-on-${color}-container)`,
              "--background": `var(--md-sys-color-${color}-container)`,
            }),
          ...(variant === "outlined" &&
            color && {
              "--color": `var(--md-sys-color-${color})`,
            }),
          ...(variant === "text" &&
            color && {
              "--color": `var(--md-sys-color-${color})`,
            }),
        } as React.CSSProperties
      }
    >
      {startIcon && <span className="MuiButton-startIcon">{startIcon}</span>}
      {children}
      {endIcon && <span className="MuiButton-startIcon">{endIcon}</span>}
    </button>
  );
};

export default Button;
