import React from 'react'

export default function PageHero() {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="bg-[#448AFF] h-[60vh] 2xl:h-screen">
        <div className="max-w-[1280px] px-4 2xl:px-0 mx-auto flex flex-col md:flex-row justify-between h-ll text-white">
          
          {/* Heading */}
          <h1 className="mt-20 md:mt-32 2xl:mt-40 text-3xl md:text-6xl font-bold text-start md:text-left">
            About
          </h1>

          {/* Paragraph */}
          <p className="mt-6 md:mt-32 2xl:mt-40 w-full md:w-[50%] 2xl:w-[30%] text-lg md:text-2xl leading-relaxed font-semibold text-start md:text-left">
            Learn about the company's mission, guiding principles, and leadership spearheaded by a team of experts.
          </p>

        </div>
      </div>

      {/* Overlapping Image */}
      <div className="absolute bottom-[-200px] md:bottom-[-250px] right-0 w-[90%] md:w-[80%] z-10">
        <img
          src="/homepage/hero.webp"
          alt="About us"
          className="rounded-l-2xl shadow-lg object-cover w-full h-[400px] md:h-[600px]"
        />
      </div>
    </section>
  )
}
