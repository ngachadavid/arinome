"use client";
import React, { useRef, useEffect, useState } from "react";

export default function Quote({ image, text, name, title }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#448AFF] py-6 rounded-t-4xl">
      <div
        ref={ref}
        className="flex flex-col md:flex-row items-start space-x-6 p-10 md:p-20 max-w-[1280px] px-4 2xl:px-0 mx-auto"
      >
        {/* Left Image */}
        <div
          className={`flex-shrink-0 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <img
            src={image}
            alt={name}
            className="w-24 md:w-20 h-24 md:h-20 rounded-full object-cover"
          />
        </div>

        {/* Quote Content */}
        <div>
          <p
            className={`mt-6 md:mt-0 text-lg md:text-2xl text-white w-full md:w-[70%] transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "0.3s" }}
          >
            {`“${text}”`}
          </p>
          <div
            className={`mt-4 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <h4 className="font-extrabold text-base md:text-lg text-white">
              {name}
            </h4>
            <p className="text-sm md:text-base text-white/60">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
