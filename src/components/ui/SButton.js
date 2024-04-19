import React from "react";

// Button component
export const SButton = ({
  children,
  customWidth = "fit-content",
  secondaryFont = false,
  uppercase = false,
  fullWidth = false,
  variant = "contained", // 'contained', 'outlined'
  size = "medium", // 'small', 'medium', 'large'
  startIcon = null,
  endIcon = null,
  ...props
}) => {
  // Set up base styles
  let baseStyles = `font-${secondaryFont ? "AvenueMono" : "Montserrat"} font-semibold text-${uppercase ? "uppercase" : "capitalize"} rounded-full shadow-none transition-all duration-500 ease-in-out`;

  // Set up size-related styles
  const sizeStyles = {
    small: "h-11 text-sm leading-[14px] tracking-wider px-7",
    medium: "h-12 text-base leading-4 tracking-wider px-8",
    large: "h-14 text-lg leading-[18px] tracking-widest px-9",
  };

  // Set up variant-related styles
  const variantStyles = {
    contained: "bg-blue-500 hover:bg-blue-600 text-white",
    outlined: "border border-gray-200 text-gray-700 hover:bg-gray-100",
  };

  // Responsive width classes
  const widthClass =
    fullWidth || customWidth === "100%" ? "w-full" : `w-[${customWidth}]`;

  // Combine all relevant styles
  const buttonClasses = `inline-block ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthClass}`;

  return (
    <button className={buttonClasses} {...props}>
      {startIcon && <span className="mr-3">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-3">{endIcon}</span>}
    </button>
  );
};
