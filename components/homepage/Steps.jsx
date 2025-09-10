import React from "react";

const steps = [
  {
    number: "1",
    title: "Specify Needs",
    description:
      "The client specifies the exact product or service requirements in detail.",
  },
  {
    number: "2",
    title: "Source Options",
    description:
      "We identify companies that can deliver promptly and at the most competitive price.",
  },
  {
    number: "3",
    title: "Selection Support",
    description:
      "Clients receive guidance in the selection process using industry-tested standards.",
  },
  {
    number: "4",
    title: "Negotiate & Deliver",
    description:
      "We negotiate terms and ensure products are delivered to the client’s complete satisfaction.",
  },
];

export default function Steps() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        How We Work
      </h2>

      <div className="relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-[#448AFF] -translate-x-1/2"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`mb-12 flex w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Content box */}
            <div className="w-1/2 px-6">
              <div className="bg-white shadow-md rounded-lg p-6 relative">
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>

            {/* Number marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#448AFF] text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold shadow-md">
              {step.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
