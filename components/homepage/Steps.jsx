"use client"

import React from "react";

const steps = [
  {
    number: "01",
    title: "Client Specification",
    description: "Client specifies what product they need with detailed requirements and specifications.",
    color: "bg-[#448AFF]"
  },
  {
    number: "02",
    title: "Company Identification", 
    description: "We identify companies that can deliver the product promptly, at the right price.",
    color: "bg-[#448AFF]"
  },
  {
    number: "03",
    title: "Selection Assistance",
    description: "We assist client in selection process through an industry tested standard.",
    color: "bg-[#448AFF]"
  },
  {
    number: "04",
    title: "Negotiation & Delivery",
    description: "We negotiate and deliver the product to our client's complete satisfaction.",
    color: "bg-[#448AFF]"
  },
];

export default function Steps() {
  return (
    <section className="">
      <div className="max-w-[1280px] px-4 2xl:px-4 mx-auto py-20">
          <h2 className="text-black text-2xl md:text-4xl font-bold">
            Our Process
          </h2>
          <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>
        </div>
      
      <div className="max-w-5xl mx-auto px-4 mt-4 md:mt-10">
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[#448AFF] -translate-x-1/2"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`mb-8 flex w-full items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Content box */}
                <div className="w-1/2 px-0 md:px-8">
                  <div className={`bg-white rounded-2xl px-6 md:px-8 py-4 md:py-8 shadow-lg border-l-4 border-[#448AFF] ${step.color.replace('bg-', 'border-')} hover:shadow-xl transition-shadow duration-300`}>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="flex-1">
                        <h3 className="text-base md:text-xl font-bold text-black mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm md:text-base text-black leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Number marker */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 ${step.color} text-white w-10 md:w-14 h-10 md:h-14 rounded-full flex items-center justify-center font-bold text-base md:text-lg shadow-lg`}>
                  {step.number}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}