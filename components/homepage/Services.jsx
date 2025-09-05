'use client'
import React, { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: "Office Supplies",
    description: "We equip your workplace with reliable, high-quality office essentials that keep your team productive and operations running smoothly.",
    bullets: [
      "Always in stock: avoid operational delays and interruptions",
      "Expert guidance to select the most effective solutions for your team",
      "Boosts productivity with dependable, high-quality supplies"
    ],
    image: "/homepage/hero.webp",
  },
  {
    title: "Branding & Printing",
    description: "We deliver creative branding and premium printing solutions that make your business stand out and leave a lasting impression.",
    bullets: [
      "Custom designs that capture your unique business identity",
      "Premium print materials that leave a lasting impression",
      "Meticulous attention to detail for professional, polished results"
    ],
    image: "/homepage/hero.webp",
  },
  {
    title: "Food & Beverage Supplies",
    description: "We supply high-quality food and beverage essentials to ensure your operations stay smooth and your offerings remain top-notch.",
    bullets: [
      "Consistent quality and freshness for all your needs",
      "Streamlined supply to avoid stock shortages",
      "Expert advice to optimize selection and ordering"
    ],
    image: "/homepage/hero.webp",
  },
  {
    title: "ICT Solutions",
    description: "We provide innovative ICT solutions that streamline your operations, improve efficiency, and drive digital transformation across your business.",
    bullets: [
      "Customized tech solutions to suit your operational needs",
      "Reliable support to ensure smooth system performance",
      "Optimizes workflows for efficiency and productivity"
    ],
    image: "/homepage/hero.webp",
  },
  {
    title: "Paint & Finishing Supplies",
    description: "We deliver high-quality paint and finishing supplies that ensure professional, lasting results for every project you undertake.",
    bullets: [
      "Durable products that enhance appearance and longevity",
      "Expert guidance to select the right materials for the job",
      "Consistent quality to maintain standards across projects"
    ],
    image: "/homepage/hero.webp",
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
                        className={`flex flex-col md:flex-row items-center gap-8 ${
                            index % 2 === 1 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        {/* Content - fade up animation */}
                        <div 
                            className={`md:w-1/2 transition-all duration-700 ease-out ${
                                serviceVisibility[index] 
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

                        {/* Image - more pronounced fade up animation */}
                        <div 
                            className={`md:w-1/2 transition-all duration-800 ease-out ${
                                serviceVisibility[index] 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-6'
                            }`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full rounded-xl shadow-lg object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}