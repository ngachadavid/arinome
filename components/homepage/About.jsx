'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Target, HandHeart, Lightbulb, Heart, CheckCircle } from "lucide-react";

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(3.5)
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    const sliderRef = useRef(null)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    const features = [
        {
            title: "Trusted Expertise",
            description: "A proven track record in handling diverse projects with precision and professionalism, giving clients the confidence that every task is in safe hands.",
            icon: Target
        },
        {
            title: "Dedicated Support",
            description: "Our team is always ready to assist, providing personalized guidance and quick responses to ensure your projects run smoothly and stress-free.",
            icon: HandHeart
        },
        {
            title: "Tailored Solutions",
            description: "Every client is unique. We adapt to specific requirements with flexible, innovative approaches that deliver practical and effective outcomes.",
            icon: Lightbulb
        },
        {
            title: "Client-First Commitment",
            description: "Your priorities guide our process. We align with your objectives to ensure that every engagement adds value and exceeds expectations.",
            icon: Heart
        },
        {
            title: "Dependable Delivery",
            description: "Timely, consistent, and reliable results are at the core of our operations — because in business, trust is built on keeping promises.",
            icon: CheckCircle
        }
    ];

    // Intersection Observer for viewport detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.8 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    // Update slidesPerView based on window size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(1.3) // mobile
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2.3) // tablet
            } else {
                setSlidesPerView(3.3) // desktop
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const nextSlide = () => {
        if (currentIndex < features.length - slidesPerView) {
            setCurrentIndex(prev => prev + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    // Touch event handlers
    const handleTouchStart = (e) => {
        setTouchEnd(0) // Reset touchEnd
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        
        const distance = touchStart - touchEnd
        const minSwipeDistance = 20
        
        if (distance > minSwipeDistance) {
            // Swiped left - go to next slide
            nextSlide()
        }
        
        if (distance < -minSwipeDistance) {
            // Swiped right - go to previous slide
            prevSlide()
        }
    }

    return (
        <section className="py-20" ref={sectionRef}>
            <div className='max-w-[1280px] mx-auto px-4 2xl:px-0'>
                <h2 className='text-black text-2xl md:text-4xl font-bold w-full md:w-[60%]'>Why Arinome Ventures?</h2>
                <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>

                {/* Paragraph and Navigation */}
                <div className="mt-8 flex items-start justify-between">
                    {/* Navigation Controls */}
                    <div className="hidden md:flex space-x-2 md:space-x-4 mr-4 md:mr-8">
                        {/* Prev Button */}
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="w-12 md:w-20 h-8 md:h-10 bg-white border border-gray-300 text-[#448AFF] rounded-full flex items-center justify-center hover:bg-[#448AFF] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg
                                className="w-4 md:w-6 h-4 md:h-6 transform rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 12H5m14 0-4 4m4-4-4-4"
                                />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= features.length - slidesPerView}
                            className="w-12 md:w-20 h-8 md:h-10 bg-white border border-gray-300 text-[#448AFF] rounded-full flex items-center justify-center hover:bg-[#448AFF] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg
                                className="w-4 md:w-6 h-4 md:h-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 12H5m14 0-4 4m4-4-4-4"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="w-[95%] md:w-2/3 lg:w-1/2">
                        <h3 className="text-black text-base md:text-xl leading-relaxed">
                            You want seamless operations and dependable results; we're the partner that makes it happen. Our forward-thinking approach ensures every project runs smoothly and adds real value to your business.
                        </h3>
                    </div>
                </div>

                {/* Single Swiper with animated cards and touch support */}
                <div 
                    className="mt-16 overflow-hidden"
                    ref={sliderRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`
                        }}
                    >
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 px-1 md:px-2 transition-all duration-700 ease-out ${
                                        isVisible 
                                            ? 'opacity-100 translate-y-0' 
                                            : 'opacity-0 translate-y-4'
                                    }`}
                                    style={{ 
                                        width: `calc(100% / ${slidesPerView})`,
                                        transitionDelay: `${index * 0.10}s`
                                    }}
                                >
                                    <div className="bg-white rounded-xl p-4 md:p-6 h-full border border-gray-300 text-start">
                                        <div className="text-4xl mb-12 md:mb-20">
                                            <IconComponent className="w-12 h-12 text-[#448AFF]" />
                                        </div>
                                        <div className="text-lg md:text-2xl font-bold text-black mb-3 w-[80%] md:w-[60%]">{feature.title}</div>
                                        <h3 className="text-black text-sm md:text-base leading-relaxed w-[90%]">{feature.description}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}