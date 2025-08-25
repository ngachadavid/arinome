import React from 'react'

// Reusable Value Card Component
const ValueCard = ({ number, title, description }) => {
  return (
    <div className="text-white border-t-2 md:border-t-0 md:border-l-2 border-white/30 pt-2 md:pt-0 md:pl-4">
      <div className="mb-4">
        <span className="mb-10 md:mb-40 text-white/60 text-xl font-bold block">{number.toString().padStart(2, '0')}</span>
        <h3 className="mb-4 text-xl md:text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-white leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default function Values() {
  const valuesData = [
    {
      id: 1,
      title: "Integrity",
      description: "We act with transparency and honesty in every decision, building trust as the foundation of all our partnerships."
    },
    {
      id: 2,
      title: "Excellence", 
      description: "We are relentless in our pursuit of quality, delivering solutions that not only meet but consistently surpass global standards."
    },
    {
      id: 3,
      title: "Innovation",
      description: "We harness creativity and emerging technologies to craft transformative solutions that create lasting impact."
    }
  ]

  return (
    <section className='bg-white py-20'>
        <div className='max-w-[1280px] mx-auto px-4 2xl:px-0'>
                <h1 className='text-black text-2xl md:text-4xl font-bold'>Our Values</h1>
                <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>
                <div className="mt-8 flex items-start justify-between">
                     <div className="w-[95%] md:w-2/3 lg:w-1/2">
                        <p className="text-black text-base md:text-xl leading-relaxed">
                            Our values are all about who we are, what we want to achieve, and the way we do it. They're at the heart of our business, and are characteristics that have inspired trust and loyalty in our clients.
                        </p>
                    </div>
                </div>

                {/* Three Column Values Section */}
                <div className="mt-12 bg-[#448AFF] rounded-lg p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {valuesData.map((value) => (
                          <ValueCard
                            key={value.id}
                            number={value.id}
                            title={value.title}
                            description={value.description}
                          />
                        ))}
                    </div>
                </div>
                             
        </div>
    </section>
  )
}