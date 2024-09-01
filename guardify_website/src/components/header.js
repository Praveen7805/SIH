import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          Guardify
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-gray-300"><Link to="/">Home</Link></li>
            <li className="hover:text-gray-300"><Link to="/features">Features</Link></li>
            <li className="hover:text-gray-300"><Link to="/about">About</Link></li>
            <li className="hover:text-gray-300"><Link to="/contact">Contact</Link></li>
            <li className="hover:text-gray-300"><Link to="/dashboard">Dashboard</Link></li>
            <li className="hover:text-gray-300"><Link to="/urlInput">URLInput</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
