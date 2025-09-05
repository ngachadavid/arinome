'use client'
import React, { useEffect, useRef, useState } from 'react'

const services = [
    {
        title: "Office Supplies",
        description: "From everyday stationery to office technology, we deliver essential supplies that keep your workplace running.",
        bullets: [
            "Stationery & premium writing materials",
            "Office furniture & ergonomic equipment",
            "Printers, IT accessories & consumables"
        ],
        image: "/services/office1.jpg",
    },
    {
        title: "Branding & Printing",
        description: "Creative branding and premium printing solutions that give your business a professional, standout identity.",
        bullets: [
            "Logo design & full brand identity development",
            "Custom signage, banners & promotional materials",
            "Business cards, brochures & corporate profiles"
        ],
        image: "/services/print.jpg",
    },
    {
        title: "Food & Beverage Supplies",
        description: "Reliable supply of food and beverage essentials to keep your team refreshed and operations running smoothly.",
        bullets: [
            "Office pantry essentials & breakroom supplies",
            "Beverages, bottled water & packaged foods",
            "Catering equipment & bulk order solutions"
        ],
        image: "/services/food.webp",
    },
    {
        title: "ICT Solutions",
        description: "Tailored ICT solutions that support your digital transformation and keep your business connected.",
        bullets: [
            "Computers, networking & IT hardware",
            "Websites, applications & system development",
            "Technical support & ongoing maintenance"
        ],
        image: "/services/sabuk.png",
    },
    {
        title: "Paint & Finishing Supplies",
        description: "Durable paints and finishing products designed for professional results and long-lasting quality.",
        bullets: [
            "Interior, exterior & industrial premium paints",
            "Professional brushes, rollers & application tools",
            "Color matching & finishing consultation services"
        ],
        image: "/services/paint1.jpg",
    },
]



export default function Services() {
    const [headerVisible, setHeaderVisible] = useState(false)
    const [serviceVisibility, setServiceVisibility] = useState({})
    const headerRef = useRef(null)
    const serviceRefs = useRef([])

    // Header intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeaderVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        if (headerRef.current) {
            observer.observe(headerRef.current)
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current)
            }
        }
    }, [])

    // Services intersection observer
    useEffect(() => {
        const observers = []

        serviceRefs.current.forEach((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setServiceVisibility(prev => ({
                                ...prev,
                                [index]: true
                            }))
                        }
                    },
                    { threshold: 0.2 }
                )

                observer.observe(ref)
                observers.push(observer)
            }
        })

        return () => {
            observers.forEach(observer => observer.disconnect())
        }
    }, [])

    return (
        <section className="py-20">
            <div className="max-w-[1280px] mx-auto px-4 2xl:px-0 space-y-16">
                <h2 className='text-black text-2xl md:text-4xl font-bold w-full md:w-[60%]'>
                    Browse our services below to see how we can assist your business.
                </h2>
                <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>


                {/* Animated services */}
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={el => serviceRefs.current[index] = el}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Content - fade up animation */}
                        <div
                            className={`md:w-1/2 transition-all duration-700 ease-out ${serviceVisibility[index]
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <h3 className="text-lg md:text-2xl font-bold mb-4">{service.title}</h3>
                            <h4 className="text-black text-base md:text-xl mb-4 w-[90%]">{service.description}</h4>
                            <ul className="text-sm md:text-base px-2 list-disc list-inside text-black/90 space-y-1">
                                {service.bullets.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Image - fade up + slide from left on mobile */}
                        <div
                            className={`md:w-1/2 transition-all duration-800 ease-out ${serviceVisibility[index]
                                ? 'opacity-100 translate-y-0 translate-x-0'
                                : 'opacity-0 translate-y-6 -translate-x-8 md:translate-x-0'
                                }`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-[300px] md:h-[400px] rounded-xl shadow-lg object-cover md:object-cove"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}