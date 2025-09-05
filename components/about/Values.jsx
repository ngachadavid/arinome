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
          // Once triggered, we can disconnect to prevent re-triggering
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

// Reusable Value Card Component
const ValueCard = ({ number, title, description, isVisible, delay = 0 }) => {
  return (
    <div className={`text-white border-t-2 md:border-t-0 md:border-l-2 border-white/30 pt-2 md:pt-0 md:pl-4 transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}
    style={{ transitionDelay: `${delay}s` }}>
      <div className="mb-4">
        <span className="mb-10 md:mb-40 text-white/60 text-xl font-bold block">{number.toString().padStart(2, '0')}</span>
        <h3 className="mb-4 text-xl md:text-2xl font-bold">{title}</h3>
      </div>
      <h4 className="text-white leading-relaxed">
        {description}
      </h4>
    </div>
  )
}

export default function Values() {
  const [ref, isInView] = useInView()
  
  const valuesData = [
    {
      id: 1,
      title: "Integrity",
      description: "We act with transparency and honesty in every decision, building trust as the foundation of all our partnerships."
    },
    {
      id: 2,
      title: "Excellence", 
      description: "We are relentless in our pursuit of quality, delivering solutions that not only meet but consistently surpass global standards."
    },
    {
      id: 3,
      title: "Innovation",
      description: "We harness creativity and emerging technologies to craft transformative solutions that create lasting impact."
    }
  ]

  return (
    <section className='bg-white pt-20' ref={ref}>
        <div className='max-w-[1280px] mx-auto px-4 2xl:px-0'>
                {/* Animated header */}
                <div className={`transition-all duration-700 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '0.1s' }}>
                  <h2 className='text-black text-2xl md:text-4xl font-bold'>Our Values</h2>
                  <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>
                </div>
                
                {/* Animated description */}
                <div className="mt-8 flex items-start justify-between">
                     <div className={`w-[95%] md:w-2/3 lg:w-1/2 transition-all duration-700 ease-out ${
                       isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                     }`}
                     style={{ transitionDelay: '0.3s' }}>
                        <p className="text-black text-base md:text-xl leading-relaxed">
                            Our values are all about who we are, what we want to achieve, and the way we do it. They're at the heart of our business, and are characteristics that have inspired trust and loyalty in our clients.
                        </p>
                    </div>
                </div>

                {/* Three Column Values Section - Blue bg excluded from animations */}
                <div className="mt-12 bg-[#448AFF] rounded-lg p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {valuesData.map((value, index) => (
                          <ValueCard
                            key={value.id}
                            number={value.id}
                            title={value.title}
                            description={value.description}
                            isVisible={isInView}
                            delay={0.5 + (index * 0.2)} // Staggered: 0.5s, 0.7s, 0.9s
                          />
                        ))}
                    </div>
                </div>
                             
        </div>
    </section>
  )
}