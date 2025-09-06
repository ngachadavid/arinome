'use client'
import React, { useState, useEffect, useRef } from 'react'

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.3, 
        ...options
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

export default function Intro() {
  const [ref, isInView] = useInView()

  return (
    <section className='bg-white' ref={ref}>
        <div className='mt-20 md:mt-40 mb-20 max-w-[1280px] px-4 2xl:px-0 mx-auto'>
            {/* Animated title and divider */}
            <div className={`transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}>
              <h2 className='text-black text-2xl md:text-4xl font-bold'>
                  Who we are
              </h2>
              <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>
            </div>

            {/* Animated description */}
            <h3 className={`mt-10 text-black text-base md:text-xl leading-relaxed w-[95%] md:w-2/3 lg:w-1/2 transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.3s' }}>
                <span>Arinome Ventures Limited is a dynamic and versatile company specializing in high-quality products and services across multiple industries. <br/> We are a trusted one-stop supplier for businesses, institutions, and government agencies.</span>
            </h3>
        </div>
    </section>
  )
}