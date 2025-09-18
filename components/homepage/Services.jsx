'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function Services() {
    const [services, setServices] = useState([]);
    const [headerVisible, setHeaderVisible] = useState(false);
    const [serviceVisibility, setServiceVisibility] = useState({});
    const headerRef = useRef(null);
    const serviceRefs = useRef([]);

    // Fetch services.json
    useEffect(() => {
        fetch("/data/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error("Failed to load services:", err));
    }, []);

    // Header intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeaderVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) observer.unobserve(headerRef.current);
        };
    }, []);

    // Services intersection observer
    useEffect(() => {
        const observers = [];

        serviceRefs.current.forEach((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setServiceVisibility((prev) => ({
                                ...prev,
                                [index]: true,
                            }));
                        }
                    },
                    { threshold: 0.2 }
                );

                observer.observe(ref);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [services]);

    return (
        <section className="py-20">
            <div className="max-w-[1280px] mx-auto px-4 2xl:px-0 space-y-16">
                <h2
                    ref={headerRef}
                    className={`text-black text-2xl md:text-4xl font-bold w-full md:w-[60%] transition-opacity duration-700 ${headerVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    Browse our services below to see how we can assist your business.
                </h2>
                <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>

                {/* Animated services */}
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={(el) => (serviceRefs.current[index] = el)}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Content */}
                        <div
                            className={`w-full md:w-[45%] transition-all duration-700 ease-out ${serviceVisibility[index]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: "0.2s" }}
                        >
                            <h3 className="text-lg md:text-2xl font-bold mb-4">
                                {service.title}
                            </h3>
                            <h4 className="text-black/90 text-base md:text-lg mb-4">
                                {service.description}
                            </h4>
                            <ul className="text-sm px-2 list-disc list-inside text-black/90 space-y-1">
                                {service.bullets.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Images */}
                        <div
                            className={`w-full md:w-[55%] h-[300px] md:h-[400px] relative rounded-xl overflow-hidden`}
                        >
                            {/* Main hero image - slides from left */}
                            <div
                                className={`absolute left-0 top-8 w-[50%] h-[65%] transition-all duration-700 ease-out ${serviceVisibility[index]
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 -translate-x-10"
                                    }`}
                            >
                                <img
                                    src={service.gallery[0]}
                                    alt={`${service.title} - Main`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Secondary image - slides from right */}
                            <div
                                className={`absolute right-4 top-2 w-[42%] h-[50%] z-10 transition-all duration-700 ease-out delay-200 ${serviceVisibility[index]
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 translate-x-10"
                                    }`}
                            >
                                <img
                                    src={service.gallery[1]}
                                    alt={`${service.title} - Secondary`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Tertiary image - slides from down */}
                            <div
                                className={`absolute left-[40%] bottom-4 w-[32%] h-[38%] shadow-lg z-20 transition-all duration-700 ease-out delay-300 ${serviceVisibility[index]
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 translate-y-10"
                                    }`}
                            >
                                <img
                                    src={service.gallery[2]}
                                    alt={`${service.title} - Tertiary`}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <div className="absolute -top-1 -left-1 w-full h-full bg-white rounded-xl -z-10"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
