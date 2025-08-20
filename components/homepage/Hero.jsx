import React from 'react'

export default function Hero() {
  return (
    <section className='relative w-full bg-[#448AFF] h-screen overflow-hidden'>
      <div className="max-w-[1280px] mx-auto px-4 md:px-0 py-20 flex flex-col md:flex-row items-center h-full">
        {/* Text Content*/}
        <div className="w-full md:w-1/2 z-10 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            ARINOME VENTURES LIMITED
          </h1>
          <p className="mt-4 text-base md:text-lg text-white">
            It is our aim to exceed your expectations through this engagement and we are committed to ensuring that our service is valuable to you today and in the future.
          </p>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center z-10">
          {/* Placeholder for Illustrator image or code */}
          <div className="bg-gray-200 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center rounded-lg shadow-lg">
            Image / Illustration
          </div>
        </div>
      </div>

      {/* Curved Bottom SVG */}
        <div className="absolute bottom-0 left-0 w-full -mb-1">
        <svg 
          viewBox="0 0 1200 200" 
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,200 L0,100 Q300,0 600,100 T1200,100 L1200,200 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}