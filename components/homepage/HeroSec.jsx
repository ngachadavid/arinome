import React from "react";

export default function HeroSec() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/homepage/hero.webp')" }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col gap-8">
                {/* Top  */}
                <div className="text-left text-white">
                    <h1 className="flex flex-col text-[52px] md:text-[72px] font-bold leading-tight">
                        Arinome
                        <span className="ml-0 md:ml-4 text-[52px] md:text-[72px] font-bold leading-tight">
                            Ventures
                            <sup className="text-sm md:text-lg align-super ml-1 font-normal">TM</sup>
                        </span>
                    </h1>
                </div>

                {/* Bottom */}
                <div className="text-left text-white w-full md:w-1/2 ml-auto">
                    <p className="text-lg md:text-xl">
                        We are dedicated to providing innovative solutions and exceeding
                        expectations. Our mission is to create lasting impact for our
                        clients and communities we serve.
                    </p>
                </div>

            </div>


            {/* Bottom Left Blob */}
            <div className="absolute bottom-[-150px] left-[-150px] z-0">
                <div className="blob bg-[#448AFF] w-[300px] h-[300px] md:w-[500px] md:h-[500px]"></div>
            </div>
        </section>
    );
}
