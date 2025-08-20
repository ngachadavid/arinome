'use client'
import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed w-full z-50 bg-transparent backdrop-blur-md text-blue-400">
            <div className={`max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
                <div className="flex items-center space-x-28">
                    {/* Logo */}
                    <div className={`font-bold transition-all duration-300 ${isScrolled ? 'text-2xl' : 'text-4xl'}`}>
                        Arinome 
                        <sub className={`text-sm font-normal transition-all duration-300 ${isScrolled ? 'opacity-0 scale-0 ml-0' : 'opacity-100 scale-100'}`}>
                            ventures
                        </sub>
                    </div> 

                    {/* Links */}
                    <ul className="flex space-x-8">
                        <li><a href="#about" className="hover:text-blue-500">About</a></li>
                        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>

                {/* Get in Touch Button */}
                <div>
                    <a
                        href="#contact"
                        className="relative group px-4 py-2 rounded-[20px] bg-blue-400 text-white hover:bg-transparent hover:text-blue-400 transition flex items-center space-x-2 overflow-hidden"
                    >
                        {/* Text */}
                        <span className="relative z-10 transition-colors duration-300">
                            Get in Touch
                        </span>

                        {/* Arrow */}
                        <div className="relative z-10 w-6 h-6 flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-white group-hover:text-blue-400 transition-transform duration-300 -rotate-45 group-hover:rotate-0"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4" />
                            </svg>
                        </div>

                    </a>
                </div>
            </div>
        </nav>
    );
}