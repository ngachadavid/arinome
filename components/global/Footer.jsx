"use client";
import React from "react";

export default function Footer() {
    return (
        <div className="mt-20 w-full bg-[#448AFF] text-white">
            <div className="max-w-[1280px] mx-auto px-4 2xl:px-0 pt-20 pb-10">
                {/* Upper Section */}
                <div className="grid md:grid-cols-2 gap-10 border-b border-white/30 pb-8">
                    {/* Left Side */}
                    <div>
                        <p className="text-base leading-relaxed w-[60%]">
                            We are committed to delivering innovative solutions
                            and exceptional results for all our clients.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Menu */}
                        <div>
                            <h3 className="text-white/60 text-xl mb-4">Menu</h3>
                            <ul className="space-y-4">
                                <li><a href="#about" className="">About</a></li>
                                <li><a href="#contact" className="">Contact</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white/60 text-xl mb-4">Contact</h3>
                            <ul className="space-y-4">
                                <li>Panesar Centre
                                    Imara Daima, <br/>Mombasa Road, Nairobi
                                </li>
                                <li>info@arinome.com</li>
                                <li>+254 715 259 657
</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Lower Section */}
                <div className="flex text-start py-4 border-b border-white/30 pb-8">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Arinome Ventures. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
