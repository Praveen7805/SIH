// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-gray-200">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-6">
          Welcome to Guardify
        </h1>
        <p className="text-lg mb-8">
          Your ultimate solution for DDoS protection with cutting-edge technology.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-500">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
