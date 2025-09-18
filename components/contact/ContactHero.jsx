'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Form from './Form'

// Dynamically import Map with no SSR
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="md:w-[50%] h-[300px] md:h-[500px] flex items-center justify-center bg-gray-100 rounded-lg">
      <p className="text-gray-600">Loading map...</p>
    </div>
  )
})

export default function ContactHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative">
      {/* Blue background section */}
      <div className="bg-[#448AFF] h-screen w-full relative">
        <div className="max-w-[1280px] px-4 2xl:px-0 mx-auto flex flex-col md:flex-row md:justify-between h-full text-white">
          {/* Heading */}
          <h1
            className={`mt-20 md:mt-32 2xl:mt-40 text-3xl md:text-6xl font-bold text-start md:text-left transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Contact Us
          </h1>

          {/* Paragraph */}
          <h2
            className={`mt-6 md:mt-32 2xl:mt-40 w-full md:w-[60%] 2xl:w-[30%] text-lg md:text-2xl leading-relaxed font-semibold text-start md:text-left transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            Contact us using the form below, and we will get back to you as soon as possible.
          </h2>
        </div>
      </div>
      
      {/* White overlay section - positioned to show 50% on blue, 50% off */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white h-screen max-w-7xl rounded-2xl shadow-2xl z-10 flex flex-col-reverse md:flex-row gap-6 p-2 md:p-6 transition-all duration-800 ease-out w-4/5 md:w-3/4${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}>
        <Map />
        <div className="flex-1">
          <Form />
        </div>
      </div>
    </div>
  )
}