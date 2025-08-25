'use client'
import React from 'react';

export default function Map() {
  const info = [
    { label: "Address", value: "123 Main Street, Nairobi" },
    { label: "Email", value: "info@arinome.co.ke" },
    { label: "Phone", value: "+254 712 345 678" },
  ];

  return (
    <div className="md:w-[40%] space-y-4">
      {info.map((item, i) => (
        <div key={i}>
          <h4 className="font-bold text-gray-800">{item.label}</h4>
          <p className="text-gray-600">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
