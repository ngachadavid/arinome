import React from "react";
import Link from "next/link";
// import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <Link href="/contact">
            <div className="group flex items-center justify-between max-w-[1280px] px-4 2xl:px-0 mx-auto w-full text-[#448AFF] bg-white py-20 cursor-pointer">

                {/* Text (left) */}
                <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>

                {/* Arrow (right) */}
                <div className="transform -rotate-45 transition-transform duration-300 group-hover:rotate-0">
                        <svg
                            className="w-6 h-6 text-[#448AFF] transition-transform duration-300 -rotate-0 group-hover:rotate-0"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>       
                </div>
            </div>
        </Link>
    );
}
