import React from 'react';

const Button = ({ children, onClick, type = "button", className, disabled = false }) => {
  const baseStyles = `px-4 py-2 rounded text-white focus:outline-none transition`;
  const disabledStyles = `bg-gray-400 cursor-not-allowed`;
  const enabledStyles = `bg-blue-600 hover:bg-blue-700`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${disabled ? disabledStyles : enabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;