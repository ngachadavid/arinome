'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Form from './Form'

// Dynamically import Map with no SSR
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="md:w-[40%] h-[300px] md:h-[500px] flex items-center justify-center bg-gray-100 rounded-lg">
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
    <section className="relative">
      {/* Hero Background */}
      <div className="bg-[#448AFF] h-[60vh] 2xl:h-screen">
        <div className="max-w-[1280px] px-4 2xl:px-0 mx-auto flex flex-col md:flex-row justify-between h-ll text-white">
          
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
          <p
            className={`mt-6 md:mt-32 2xl:mt-40 w-full md:w-[60%] 2xl:w-[30%] text-lg md:text-2xl leading-relaxed font-semibold text-start md:text-left transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            We are here to help you. Contact us using the form below, and we will get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Section (Map + Form) */}
      <div
        className={`absolute bottom-[-720px] md:bottom-[-250px] left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-10 bg-white rounded-2xl shadow-lg flex flex-col-reverse md:flex-row gap-6 transition-all duration-800 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '0.5s' }}
      >
        <Map />
        <Form />
      </div>
    </section>
  )
}