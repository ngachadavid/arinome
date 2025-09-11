'use client'
import React, { useEffect, useRef, useState } from 'react'

const services = [
    {
        title: "General Office Stationery",
        description: "Reliable supply of everyday office stationery and essentials, combining quality with affordability to keep your workplace running. We offer a wide range of products, including the examples below among many others:",
        bullets: [
            "Writing tools: pens, pencils, markers & highlighters",
            "Paper products: notebooks, sticky notes, files & envelopes",
            "Desk accessories: staplers, clips, scissors, calculators & organizers"
        ],
        gallery: [
            "/services/office1.jpg",
            "/services/office1.jpg",
            "/services/office1.jpg"
        ],
    },
    {
        title: "Computers, Printers & Accessories",
        description: "Reliable supply of high-quality computers, printers, and accessories from trusted brands. Our wide selection ensures your business stays connected and operational with top-notch IT hardware and consumables.",
        bullets: [
            "Keyboards, mice, headsets, webcams & laptop accessories",
            "Storage & connectivity: flash drives, external drives, cables & adapters",
            "Power solutions: UPS units, batteries & surge protectors",
            "Printers, cartridges & other IT consumables from leading brands"
        ],
        gallery: [
            "/services/office1.jpg",
            "/services/office1.jpg",
            "/services/office1.jpg"
        ],
    },
    {
        title: "Office Furniture & Boardroom Equipment",
        description: "Quality office and boardroom furniture designed to create professional, comfortable, and productive environments. We offer both modular and traditional setups to meet your unique workspace needs.",
        bullets: [
            "Ergonomic chairs, boardroom & meeting tables",
            "Sideboard cabinets & functional storage solutions",
            "Projection carts, AV equipment & presentation tools",
            "Podiums, lecterns, artwork & décor for professional spaces"
        ],
        gallery: [
            "/services/office1.jpg",
            "/services/office1.jpg",
            "/services/office1.jpg"
        ],
    },
    {
        title: "Branding & Printing",
        description: "Creative branding and premium printing solutions that give your business a professional, standout identity.",
        bullets: [
            "Logo design & full brand identity development",
            "Custom signage, banners & promotional materials",
            "Business cards, brochures & corporate profiles"
        ],
        gallery: [
            "/services/office1.jpg",
            "/services/office1.jpg",
            "/services/office1.jpg"
        ],
    },
    {
        title: "Paint & Finishing Supplies",
        description: "Durable paints and finishing products designed for professional results and long-lasting quality.",
        bullets: [
            "Interior, exterior & industrial premium paints",
            "Professional brushes, rollers & application tools",
            "Color matching & finishing consultation services"
        ],
        gallery: [
            "/services/office1.jpg",
            "/services/office1.jpg",
            "/services/office1.jpg"
        ],
    },
    {
        title: "Custom Printed Stationery & Uniforms",
        description: "High-quality printing and branding solutions designed to elevate your business identity. From promotional merchandise to professional uniforms, we help your brand stand out with durable, client-focused designs.",
        bullets: [
            "Printing services: offset, digital, large format, screen & laser engraving",
            "Branded merchandise: notebooks, mugs, bottles, umbrellas & trophies",
            "Corporate & promotional wear: T-shirts, polos, caps, bags & giveaways",
            "Durable uniforms: tailored for schools, hospitality, security & more"
        ],
        gallery: [
            "/services/office1.jpg",
            "/services/office1.jpg",
            "/services/office1.jpg"
        ],
    },
    {
        title: "Construction Materials",
        description: "Your trusted source for high-quality construction materials, delivered on time anywhere in Kenya. From structural essentials to project necessities, we ensure every construction project runs smoothly.",
        bullets: [
            "Cement, roofing materials & structural steel",
            "Pipes, fittings & plumbing materials",
            "Bricks, blocks & masonry products"
        ],
        gallery: [
            "/services/office1.jpg",
            "/services/office1.jpg",
            "/services/office1.jpg"
        ],
    },
    {
        title: "Cleaning Materials, Detergents & Disinfectants",
        description: "High-quality cleaning materials and disinfectants suitable for commercial, institutional, and residential use. Our products maintain hygienic and safe environments across industries.",
        bullets: [
            "Commercial cleaning supplies for offices, banks, NGOs, and schools",
            "Disinfectants for safe, sanitized environments and post-relocation use",
            "Residential cleaning essentials for homes and homesteads"
        ],
        gallery: [
            "/services/office1.jpg",
            "/services/office1.jpg",
            "/services/office1.jpg"
        ],
    },
    {
        title: "Soft Drinks and Beverage Supply",
        description: "We provide offices and organizations with a reliable supply of beverages and the essential ingredients to prepare them. From soft drinks to coffee and tea supplies, we ensure your team stays refreshed without any hassle.",
        bullets: [
            "Timely delivery of soft drinks and bottled beverages",
            "Coffee, tea, sugar, fresh milk, and other beverage essentials",
            "Additional items supplied on request to meet specific office needs"
        ],
        gallery: [
            "/services/office1.jpg",
            "/services/office1.jpg",
            "/services/office1.jpg"
        ],
    },
    {
        title: "Dry and Fresh Foodstuffs",
        description: "Wide range of dry and fresh foodstuffs sourced from trusted local and international suppliers. Ideal for schools, institutions, NGOs, government entities, and commercial clients across East Africa.",
        bullets: [
            "Chilled and processed foods for institutional and commercial use",
            "Dry goods, condiments, and pantry essentials",
            "Fresh produce to meet daily operational needs"
        ],
        gallery: [
            "/services/office1.jpg",
            "/services/office1.jpg",
            "/services/office1.jpg"
        ],
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
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* Content - fade up animation */}
                        <div
                            className={`w-full md:w-[45%] transition-all duration-700 ease-out ${serviceVisibility[index]
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: '0.2s' }}
                        >
                            <h3 className="text-lg md:text-2xl font-bold mb-4">{service.title}</h3>
                            <h4 className="text-black/90 text-base md:text-lg mb-4">{service.description}</h4>
                            <ul className="text-sm px-2 list-disc list-inside text-black/90 space-y-1">
                                {service.bullets.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Image - fade up + slide from left on mobile */}
                        <div className="w-full md:w-[55%] h-[300px] md:h-[400px] relative rounded-xl overflow-hidden g-[#448AFF]">
                            {/* Main hero image  */}
                            <div className="absolute left-0 top-8 w-[50%] h-[65%]">
                                <img
                                    src={service.gallery[0]}
                                    alt={`${service.title} - Main`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Secondary image */}
                            <div className="absolute right-4 top-2 w-[42%] h-[50%] z-10">
                                <img
                                    src={service.gallery[1]}
                                    alt={`${service.title} - Secondary`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Lower */}
                            <div className="absolute left-[40%] bottom-4 w-[32%] h-[38%]  shadow-lg z-20">
                                <img
                                    src={service.gallery[2]}
                                    alt={`${service.title} - Tertiary`}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <div className="absolute -top-1 -left-1 w-full h-full bg-white rounded-xl -z-10 "></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}