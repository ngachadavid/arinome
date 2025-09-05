"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full bg-[#448AFF] text-white">
            <div className="max-w-[1280px] mx-auto px-4 2xl:px-0 pt-20 pb-10">
                {/* Upper Section */}
                <div className="grid md:grid-cols-2 gap-10 border-b border-white/30 pb-8">
                    {/* Left Side */}
                    <div>
                        <h2 className="text-base md:text-xl leading-relaxed w-[80%] md:w-[60%]">
                            We are committed to delivering innovative solutions
                            and exceptional results for all our clients.
                        </h2>
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Menu */}
                        <div>
                            <h3 className="text-white/60 text-lg md:text-2xl mb-4">Menu</h3>
                            <ul className="text-sm md:text-base space-y-2 md:space-y-4">
                                <li>
                                    <Link href="/about" className="">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white/60 text-lg md:text-2xl mb-4">Contact</h3>
                            <ul className="text-sm md:text-base space-y-2 md:space-y-4">
                                <li>
                                    Panesar Centre
                                    Imara Daima, <br />Mombasa Road, Nairobi
                                </li>
                                <li>
                                    <a
                                        href="mailto:info@arinome.com"
                                        className=""
                                    >
                                        info@arinome.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+254715259657"
                                        className=""
                                    >
                                        +254 715 259 657
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Lower Section */}
                <div className="flex text-start py-4 border-b border-white/30 pb-8">
                    <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} Arinome Ventures. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
