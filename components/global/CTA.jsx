'use client'
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

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

export default function CTA() {
  const [ref, isInView] = useInView()

  return (
    <div ref={ref}>
      <Link href="/contact">
        <div className="group flex items-center justify-between max-w-[1280px] px-4 2xl:px-0 mx-auto w-full text-[#448AFF] bg-white py-10 cursor-pointer">

          {/* Text*/}
          <h2
            className={`flex-1 text-[24px] md:text-[40px] 2xl:text-[80px] font-bold leading-tight transition-all duration-700 ease-out
    ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Get your free quote
          </h2>

          {/* Arrow*/}
          <div className={`transform -rotate-45 transition-all duration-700 ease-out group-hover:rotate-0 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.3s' }}>
            <svg
              className="w-20 md:w-60 h-20 md:h-60 text-[#448AFF] transition-transform duration-300 -rotate-0 group-hover:rotate-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}