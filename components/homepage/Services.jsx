'use client'
import React from 'react'

const services = [
  {
    title: "Office Supplies",
    description: "We equip your workplace with reliable, high-quality office essentials that keep your team productive and operations running smoothly.",
    bullets: [
      "Always in stock: avoid operational delays and interruptions",
      "Expert guidance to select the most effective solutions for your team",
      "Boosts productivity with dependable, high-quality supplies"
    ],
    image: "/homepage/hero.webp",
  },
  {
    title: "Branding & Printing",
    description: "We deliver creative branding and premium printing solutions that make your business stand out and leave a lasting impression.",
    bullets: [
      "Custom designs that capture your unique business identity",
      "Premium print materials that leave a lasting impression",
      "Meticulous attention to detail for professional, polished results"
    ],
    image: "/homepage/hero.webp",
  },
  {
    title: "Food & Beverage Supplies",
    description: "We supply high-quality food and beverage essentials to ensure your operations stay smooth and your offerings remain top-notch.",
    bullets: [
      "Consistent quality and freshness for all your needs",
      "Streamlined supply to avoid stock shortages",
      "Expert advice to optimize selection and ordering"
    ],
    image: "/homepage/hero.webp",
  },
  {
    title: "ICT Solutions",
    description: "We provide innovative ICT solutions that streamline your operations, improve efficiency, and drive digital transformation across your business.",
    bullets: [
      "Customized tech solutions to suit your operational needs",
      "Reliable support to ensure smooth system performance",
      "Optimizes workflows for efficiency and productivity"
    ],
    image: "/homepage/hero.webp",
  },
  {
    title: "Paint & Finishing Supplies",
    description: "We deliver high-quality paint and finishing supplies that ensure professional, lasting results for every project you undertake.",
    bullets: [
      "Durable products that enhance appearance and longevity",
      "Expert guidance to select the right materials for the job",
      "Consistent quality to maintain standards across projects"
    ],
    image: "/homepage/hero.webp",
  },
]


export default function Services() {
    return (
        <section className="py-20">
            <div className="max-w-[1280px] mx-auto px-4 2xl:px-0 space-y-16">
                <h1 className='text-black text-2xl md:text-4xl font-bold w-[50%]'>Browse our services below to see how we can assist your business.</h1>
                <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Content */}
                        <div className="md:w-1/2">
                            <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                            <p className="text-black text-lg mb-4 w-[90%]">{service.description}</p>
                            <ul className="px-2 list-disc list-inside text-black/90 space-y-1">
                                {service.bullets.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Image */}
                        <div className="md:w-1/2">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full rounded-xl shadow-lg object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
