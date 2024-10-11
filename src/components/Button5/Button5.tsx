import React from "react";

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
  variant = "outlined",
  onClick,
  startIcon,
  endIcon,
  ...other
}) => {
  return (
    <button
      className={`MuiButton5-root ${variant ? `MuiButton5-${variant}` : ""} ${
        color ? `MuiButton5-${color}` : ""
      } ${className}`}
      onClick={onClick}
      {...other}
    >
      {startIcon && <span className="MuiButton5-startIcon">{startIcon}</span>}
      {children}
      {endIcon && <span className="MuiButton5-startIcon">{endIcon}</span>}
    </button>
  );
};

export default Button;
