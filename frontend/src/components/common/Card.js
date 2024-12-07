import React from 'react';

const Card = ({ title, children, className }) => {
  return (
    <div className={`border rounded shadow p-4 ${className}`}>
      {title && <h3 className="text-lg font-bold mb-3">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
