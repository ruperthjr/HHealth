import React from 'react';

const Spinner = ({ size = "8", className = "" }) => {
  return (
    <div
      className={`border-${size} border-blue-600 border-t-transparent border-4 rounded-full animate-spin ${className}`}
      style={{ width: `${size}rem`, height: `${size}rem` }}
    ></div>
  );
};

export default Spinner;
