import React from 'react'

export default function Intro() {
  return (
    <section className='bg-white'>
        <div className='mt-70 md:mt-80 mb-20 max-w-[1280px] px-4 2xl:px-4 mx-auto'>
            <h2 className='text-black text-2xl md:text-4xl font-bold'>
                Who we are?
            </h2>
            <div className="mt-6 w-full h-[1px] bg-gray-300 rounded"></div>
            <h3 className='mt-10 text-black text-base md:text-xl leading-relaxed w-[95%] md:w-2/3 lg:w-1/2'>
                <span>Arinome Ventures Limited is a dynamic and versatile company specializing in high-quality products and services across multiple industries. <br/> We are a trusted one-stop supplier for businesses, institutions, and government agencies.</span>
            </h3>
        </div>
    </section>
  )
}
