import React from 'react';

export default function Leadership() {
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
    <section className="bg-white py-20">
      <div className="max-w-[1280px] px-4 2xl:px-4 mx-auto">
        <h2 className="text-black text-2xl md:text-4xl font-bold">
          Our Leadership Team
        </h2>
        <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>
        <div className="mt-20 space-y-20">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:gap-6"
            >
              {/* Left Side*/}
              <div className="md:w-[50%] flex flex-col md:flex-row md:items-start gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-60 h-60 rounded-2xl object-cover shadow-lg"
                  />
                </div>
                {/* Name + Title */}
                <div className=''>
                  <h3 className="text-2xl font-bold text-black">{leader.name}</h3>
                  <p className="text-black/60 font-medium mt-2">{leader.title}</p>
                </div>
              </div>

              {/* Right Side */}
              <div className="md:w-[50%] mt-6 md:mt-0 space-y-4">
                {/* Bio */}
                {leader.bio.map((para, i) => (
                  <p key={i} className="text-black text-sm md:text-base">
                    {para}
                  </p>
                ))}

                {/* Core Competencies */}
                <div className="mt-4">
                  <h4 className="font-bold text-black mb-2">Core Competencies</h4>
                  <ul className="list-disc list-inside space-y-1 text-black text-sm">
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
