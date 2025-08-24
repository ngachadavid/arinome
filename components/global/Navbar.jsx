'use client'
import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav
                className={`fixed w-full z-50 backdrop-blur-md text-[#448AFF] transition-colors duration-300 ${isScrolled ? 'bg-white text-[#448AFF] shadow-md' : 'bg-transparent text-[#448AFF]'
                    }`}
            >
                <div className="max-w-[1280px] px-4 2xl:px-0 mx-auto flex items-center justify-between transition-all duration-300 py-4">
                    {/* Logo */}
                    <div className={`font-bold transition-all duration-300 ${isScrolled ? 'text-2xl md:text-2xl' : 'text-2xl md:text-4xl'}`}>
                        Arinome
                        <sub className={`font-normal transition-all duration-300 ${isScrolled ? 'opacity-0 scale-0 ml-0 text-xs md:text-sm' : 'opacity-100 scale-100 text-xs md:text-sm'}`}>
                            ventures
                        </sub>
                    </div>

                    {/* Desktop Right Section */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* About Link */}
                        <a href="/about" className="hover:text-blue-500 transition-colors duration-300">
                            About
                        </a>

                        {/* Get in Touch Button */}
                        <a
                            href="/contact"
                            className="relative group px-4 py-2 rounded-[20px] bg-[#448AFF] text-white hover:bg-transparent hover:text-[#448AFF] transition flex items-center space-x-2 overflow-hidden"
                        >
                            {/* Text */}
                            <span className="relative z-10 transition-colors duration-300">
                                Get in Touch
                            </span>

                            {/* Arrow */}
                            <div className="relative z-10 w-6 h-6 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white group-hover:text-[#448AFF] transition-transform duration-300 -rotate-45 group-hover:rotate-0"
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

                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                        >
                            <span className={`block w-6 h-0.5 bg-[#448AFF] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-[#448AFF] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-[#448AFF] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Full Screen Menu */}
            <div className={`fixed top-0 left-0 right-0 z-40 bg-white transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex flex-col justify-start pt-24 px-6 h-screen">
                    {/* Mobile Menu Links */}
                    <ul className="space-y-0">
                        <li className="border-b border-gray-300">
                            <a
                                href="#about"
                                className="block text-2xl font-semibold text-black transition-colors duration-300 py-6"
                                onClick={toggleMobileMenu}
                            >
                                About
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Get in Touch Button */}
                    <div className="mt-12">
                        <a
                            href="#contact"
                            className="inline-block px-8 py-4 rounded-[25px] bg-[#448AFF] text-white font-bold text-lg transition-colors duration-300"
                            onClick={toggleMobileMenu}
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}