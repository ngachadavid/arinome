'use client'
import React from 'react';

export default function Form() {
  return (
    <div className="md:w-[60%] space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Write your message here"
        className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        Submit
      </button>
    </div>
  );
}
