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
  variant,
  onClick,
  startIcon,
  endIcon,
  ...other
}) => {
  return (
    <button
      className={`MuiButton2-root ${variant ? `MuiButton2-${variant}` : ""} ${
        color ? `MuiButton2-${color}` : ""
      } ${className}`}
      onClick={onClick}
      {...other}
    >
      {startIcon && <span className="MuiButton2-startIcon">{startIcon}</span>}
      {children}
      {endIcon && <span className="MuiButton2-startIcon">{endIcon}</span>}
    </button>
  );
};

export default Button;
