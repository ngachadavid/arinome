'use client'
import React, { useEffect, useState } from "react";

export default function HeroSec() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/homepage/hero.jpg')" }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col gap-8">
                {/* Top - Staggered fade-in title */}
                <div 
                    className={`text-left text-white transition-all duration-1000 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: '0.2s' }}
                >
                    <h1 className="flex flex-col text-[52px] md:text-[72px] font-bold leading-tight">
                        {/* Arinome appears first */}
                        <span 
                            className={`transition-all duration-800 ease-out ${
                                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: '0.4s' }}
                        >
                            Arinome
                        </span>
                        {/* Ventures slides in from right */}
                        <span 
                            className={`ml-0 md:ml-4 text-[52px] md:text-[72px] font-bold leading-tight transition-all duration-800 ease-out ${
                                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: '0.8s' }}
                        >
                            Ventures
                            <sup className="text-sm md:text-lg align-super ml-1 font-normal">TM</sup>
                        </span>
                    </h1>
                </div>

                {/* Bottom - Description with delay */}
                <div 
                    className={`text-left text-white w-full md:w-1/2 ml-auto transition-all duration-800 ease-out ${
                        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: '1.2s' }}
                >
                    <h2 className="text-lg md:text-xl">
                       Your trusted partner for office supplies, branding, ICT solutions, food & beverage, and finishing solutions. Delivering quality products and services that help businesses and institutions operate with confidence.
                    </h2>
                </div>
            </div>

            {/* Bottom Left Blob with final delay */}
            <div 
                className={`absolute bottom-[-150px] left-[-150px] z-0 transition-all duration-1000 ease-out ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: '2s' }}
            >
                <div className="blob bg-[#448AFF] w-[300px] h-[300px] md:w-[500px] md:h-[500px]"></div>
            </div>
        </section>
    );
}