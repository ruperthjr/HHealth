import React from 'react';

const TextInput = ({ label, name, value, onChange, type = "text", placeholder, className }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <label htmlFor={name} className="block text-sm font-medium mb-1">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border p-2 rounded w-full focus:outline-blue-600"
      />
    </div>
  );
};

export default TextInput;