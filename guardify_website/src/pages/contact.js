// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-gray-200">
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded"
            type="text"
            id="name"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded"
            type="email"
            id="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded"
            id="message"
            placeholder="Your message"
            rows="4"
          ></textarea>
        </div>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
