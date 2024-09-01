// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} Guardify. All rights reserved.</p>
        <p className="text-sm mt-2">
          Built with love and dedication to protect your online presence.
        </p>
        <div className="mt-4 space-x-4">
          <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
