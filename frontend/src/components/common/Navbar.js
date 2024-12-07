import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">
        Precision Telemedicine
      </Link>
      <div className="flex gap-4">
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
        <Link to="/logout" className="hover:underline">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
