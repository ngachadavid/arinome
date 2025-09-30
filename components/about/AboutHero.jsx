'use client'
import React, { useEffect, useState } from 'react'

export default function AboutHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative pb-[200px]">
      {/* Hero Background */}
      <div className="bg-[#448AFF] h-[60vh] 2xl:h-screen relative">
        <div className="max-w-[1280px] px-4 2xl:px-0 mx-auto flex flex-col md:flex-row md:justify-between h-full text-white">

          {/* Heading */}
          <h1
            className={`mt-20 md:mt-32 2xl:mt-40 text-3xl md:text-6xl font-bold text-start md:text-left transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}

            style={{ transitionDelay: '0.1s' }}
          >
            About
          </h1>

          {/* Paragraph */}
          <h2
            className={`mt-6 md:mt-32 2xl:mt-40 
    w-full md:w-[60%] 2xl:w-[30%] 
    text-lg md:text-2xl leading-relaxed font-semibold 
    text-start md:text-left 
    transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}

            style={{ transitionDelay: '0.3s' }}
          >
            Learn about the company's results, guiding values, and leadership spearheaded by a team of experts.
          </h2>
        </div>

        {/* Overlapping Image */}
        <div
          className={`absolute bottom-0 right-0 w-[90%] md:w-[80%] transform translate-y-1/2 z-10 transition-all duration-800 ease-out ${mounted ? 'translate-y-1/2' : 'translate-y-1/2'
            }`}
        >
          <img
            src="/homepage/nairobi.webp"
            alt="Company team and workspace showcasing our mission and values"
            className="rounded-l-2xl shadow-lg object-cover w-full h-[400px] md:h-[600px]"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}