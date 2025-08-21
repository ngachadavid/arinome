'use client'
import React, { useState, useEffect } from 'react'

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const features = [
        {
            title: "Industry Expertise",
            description: "Specialized knowledge across multiple sectors, allowing us to understand and meet unique business needs.",
            icon: "🎯"
        },
        {
            title: "Dedicated Support",
            description: "Responsive and personalized assistance from our team ensures smooth collaboration and peace of mind.",
            icon: "🤝"
        },
        {
            title: "Innovative Solutions",
            description: "Creative, technology-driven approaches that address challenges effectively.",
            icon: "💡"
        },
        {
            title: "Customer-Centric Approach",
            description: "We prioritize client needs and tailor our services to exceed expectations.",
            icon: "❤️"
        },
        {
            title: "Reliable Delivery",
            description: "Consistently timely execution and quality you can count on.",
            icon: "✅"
        }
    ]

    const nextSlide = () => {
        if (currentIndex < features.length - 1) {
            setCurrentIndex(prev => prev + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <section className="py-20">
            <div className='max-w-[1280px] mx-auto px-4 md:px-0'>
                <h1 className='text-black text-4xl font-bold'>
                    Why Arinome Ventures?
                </h1>
                <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>

                {/* Paragraph and Navigation section */}
                <div className="mt-8 flex items-start justify-between">

                    {/* Navigation Controls (now on the left) */}
                    <div className="flex space-x-4 mr-8">
                        {/* Prev Button */}
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="w-20 h-10 bg-white border border-gray-300 text-blue-700 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg
                                className="w-6 h-6 transform rotate-180"
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

                        {/* Next Button (rotated 180°) */}
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= features.length - 3}
                            className="w-20 h-10 bg-white border border-gray-300 text-blue-700 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg
                                className="w-6 h-6"
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
                    {/* Description (now on the right) */}
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <p className="text-black text-lg leading-relaxed">
                            At Arinome Ventures, we combine deep industry knowledge with innovative approaches to deliver exceptional results. Our commitment to excellence and client satisfaction drives everything we do, ensuring that your business goals become our shared mission.
                        </p>
                    </div>
                </div>


                {/* Features Cards Swiper */}
                <div className="mt-16">

                    {/* Cards Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / 3.5)}%)`,
                            }}
                        >
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-2"
                                    style={{
                                        width: 'calc(100% / 3.5)'
                                    }}
                                >
                                    <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                        {/* Icon */}
                                        <div className="text-4xl mb-4 text-center">
                                            {feature.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-black mb-3 text-center">
                                            {feature.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-black text-sm leading-relaxed text-center">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile responsive cards */}
                    <div className="lg:hidden overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out md:hidden"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / 1.5)}%)`,
                            }}
                        >
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-2"
                                    style={{
                                        width: 'calc(100% / 1.5)'
                                    }}
                                >
                                    <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                        {/* Icon */}
                                        <div className="text-4xl mb-4 text-center">
                                            {feature.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                                            {feature.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed text-center">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tablet responsive cards */}
                    <div className="hidden md:block lg:hidden overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / 2.5)}%)`,
                            }}
                        >
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-2"
                                    style={{
                                        width: 'calc(100% / 2.5)'
                                    }}
                                >
                                    <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                        {/* Icon */}
                                        <div className="text-4xl mb-4 text-center">
                                            {feature.icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                                            {feature.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed text-center">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}