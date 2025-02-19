import React from "react";

const Button = ({
  ref,
  children,
  onClick,
  variant = "default",
  className = "",
  props,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
    ghost: "text-gray-700 hover:bg-gray-200",
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
