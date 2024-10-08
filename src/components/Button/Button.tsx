import React from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "elevated" | "filled" | "filledTonal" | "outlined" | "text";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant,
  onClick,
  startIcon,
  endIcon,
  ...other
}) => {
  return (
    <button
      className={`MuiButton-root ${
        variant ? `MuiButton-${variant}` : ""
      } ${className}`}
      onClick={onClick}
      {...other}
    >
      {startIcon && <span className="MuiButton-startIcon">{startIcon}</span>}
      {children}
      {endIcon && <span className="MuiButton-startIcon">{endIcon}</span>}
    </button>
  );
};

export default Button;
