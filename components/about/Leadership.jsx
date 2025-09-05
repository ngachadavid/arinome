'use client'
import React, { useState, useEffect, useRef } from 'react';

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2, 
        ...options
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

export default function Leadership() {
  const [ref, isInView] = useInView()
  const leaders = [
    {
      image: "/homepage/hero.webp",
      name: "Teresia Kithome",
      title: "Co-Founder & Director",
      bio: [
        "Teresia Kithome is a results-driven entrepreneur with a strong background in business development, supply chain management, and customer relations. She has over 5 years of experience in managing procurement processes and building long-term client relationships.",
        "As a co-founder of Arinome Ventures Limited, Teresia plays a key role in strategic planning, operations, and client engagement, ensuring that the company consistently delivers quality, efficiency, and value to its partners. Her leadership style emphasizes integrity, innovation, and customer satisfaction, which form the backbone of the company’s reputation."
      ],
      competencies: [
        "Business strategy & operations",
        "Supply chain & procurement",
        "Client relationship management",
        "Leadership & team buiding"
      ]
    },
    {
      image: "/homepage/hero.webp",
      name: "Wanjiru Kinyanjui",
      title: "Co-Founder & Director",
      bio: [
        "Wanjiru Kinyanjui brings a wealth of expertise in finance, administration, and corporate management. With 4 years of professional experience, she has successfully overseen projects in ICT, branding, and corporate services, making her an invaluable asset to the company.",
        "At Arinome Ventures Limited, Wanjiru oversees financial management, project execution, and quality assurance, ensuring that all services meet the highest professional standards. Her commitment to excellence, transparency, and innovation has been instrumental in driving the company’s growth and credibility in a competitive market."
      ],
      competencies: [
        "Financial planning & management",
        "ICT & corporate solutions oversight",
        "Quality control & compliance",
        "Strategic growth & innovation",
      ]
    }
  ];

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="max-w-[1280px] px-4 2xl:px-4 mx-auto">
        {/* Animated header */}
        <div className={`transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '0.1s' }}>
          <h2 className="text-black text-2xl md:text-4xl font-bold">
            Our Leadership Team
          </h2>
          <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>
        </div>

        <div className="mt-20 space-y-20">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:gap-6"
            >
              {/* Left Side - Image and Name/Title */}
              <div className="md:w-[50%] flex md:items-start gap-6">
                {/* Image */}
                <div className={`flex-shrink-0 transition-all duration-700 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${0.3 + (index * 0.4)}s` }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover shadow-lg"
                  />
                </div>
                
                {/* Name + Title */}
                <div className={`transition-all duration-700 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${0.3 + (index * 0.4)}s` }}>
                  <h3 className="text-lg md:text-2xl font-bold text-black">{leader.name}</h3>
                  <p className="text-sm md:text-base text-black/80 font-medium mt-2 leading-relaxed">{leader.title}</p>
                </div>
              </div>

              {/* Right Side - Bio and Competencies */}
              <div className={`md:w-[50%] mt-6 md:mt-0 space-y-4 transition-all duration-700 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${0.7 + (index * 0.4)}s` }}>
                {/* Bio */}
                {leader.bio.map((para, i) => (
                  <h4 key={i} className="text-black text-sm md:text-base">
                    {para}
                  </h4>
                ))}

                {/* Core Competencies */}
                <div className="mt-4">
                  <div className="font-bold text-black mb-2 text-sm md:text-base">Core Competencies</div>
                  <ul className="list-disc list-inside space-y-1 text-black/80 text-sm md:text-base">
                    {leader.competencies.map((comp, i) => (
                      <li key={i}>{comp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
