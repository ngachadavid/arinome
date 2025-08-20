import React from 'react'

export default function Hero() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-0 py-20 h-screen flex items-center">
      {/* Left Column */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-red-500">
          ARINOME VENTURES LIMITED
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          It is our aim to exceed your expectations through this engagement and we are committed to ensuring that our service is valuable to you today and in the future.
        </p>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 flex justify-center">
        {/* Placeholder for Illustrator image or code */}
        <div className="bg-gray-200 w-64 h-64 flex items-center justify-center">
          Image / Illustration
        </div>
      </div>
    </div>
  )
}
