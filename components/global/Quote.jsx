"use client";
import React from "react";

export default function Quote() {
  return (
    <div className="w-full bg-[#448AFF] py-6 rounded-t-4xl">
      <div className="flex items-start space-x-6 p-20 max-w-[1280px] px-4 2xl:px-0 mx-auto">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            src="/homepage/hero.webp"
            alt="Person"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>

        {/* Quote Content */}
        <div>
          <p className="text-lg md:text-2xl text-white w-full md:w-[70%]">
            “When we started this journey with Arinome Ventures, they quickly understood how we could work together to effectively reduce our establishing and operating costs”
          </p>
          <div className="mt-4">
            <h4 className="font-extrabold text-base md:text-lg text-white">Ted Murega</h4>
            <p className="text-sm md:text-base text-white/60">Operations Manager, Oldonyo Sabuk Primary School</p>
          </div>
        </div>
      </div>
    </div>
  );
}
