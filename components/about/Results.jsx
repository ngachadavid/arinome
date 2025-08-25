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

// Custom hook for animating numbers
const useCountUp = (end, duration = 2000, start = 0, isActive = false) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!isActive) return

    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - start) + start)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end) 
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration, start, isActive])

  return count
}

// Component for animated stat
const AnimatedStat = ({ title, value, suffix = '', isActive }) => {
  // Extract number from value (handles "30+" format)
  const numericValue = parseInt(value.toString().replace(/[^\d]/g, ''))
  const hasPlus = value.toString().includes('+')
  const hasPercent = value.toString().includes('%')
  
  const animatedValue = useCountUp(numericValue, 2000, 0, isActive)
  
  const displayValue = hasPlus ? `${animatedValue}+` : hasPercent ? `${animatedValue}%` : animatedValue

  return (
    <div>
      <h3 className="text-white text-lg font-medium">{title}</h3>
      <div className="mt-2 h-[1px] bg-gray-300 rounded"></div>
      <p className="mt-4 text-3xl md:text-6xl font-bold text-white">
        {displayValue}
      </p>
    </div>
  )
}

export default function Results() {
  const [ref, isInView] = useInView()

  return (
    <section className="bg-[#448AFF] text-white py-20">
      <div className="max-w-[1280px] px-4 2xl:px-0 mx-auto flex flex-col md:flex-row gap-8">

        {/* Left Side */}
        <div className="w-full md:w-1/3">
          <h2 className="text-white text-2xl md:text-4xl font-bold">Our Results</h2>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Statements */}
          <div className="space-y-1">
            <p className="text-white/60 text-lg md:text-3xl font-semibold leading-relaxed">
              We turn ideas into impactful solutions.
            </p>
            <p className="text-white/60 text-lg md:text-3xl font-semibold leading-relaxed">
              We drive sustainable growth through innovation.
            </p>
            <p className="text-white text-lg md:text-3xl font-semibold leading-relaxed">
              We deliver measurable results that last.
            </p>
          </div>

          {/* Stats */}
          <div ref={ref} className="grid grid-cols-2 gap-6 mt-20">
            <AnimatedStat
              title="Number of Clients Served"
              value="30+"
              isActive={isInView}
            />
            <AnimatedStat
              title="Client Retention Rate"
              value="97%"
              isActive={isInView}
            />
          </div>
        </div>

      </div>
    </section>
  )
}