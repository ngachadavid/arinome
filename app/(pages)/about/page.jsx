import Intro from '@/components/about/Intro'
import Leadership from '@/components/about/Leadership'
import Results from '@/components/about/Results'
import Values from '@/components/about/Values'
import CTA from '@/components/global/CTA'
import Navigation from '@/components/global/Navigation'
import AboutHero from '@/components/about/AboutHero'
import React from 'react'
import Quote from '@/components/global/Quote'

export default function page() {
  return (
    <>
      <Navigation />
      <AboutHero />
      <Intro />
      <Results />
      <Values />
      <Leadership />
      <Quote
        image="/homepage/hero.webp"
        text="Arinome delivered exceptional solutions by enhancing our online store system and providing high-quality printed materials. We continue to work with them, as they remain a reliable partner."
        name="Isaac Okoth"
        title="Founder, Creative Agency Inc."
      />
      <CTA />
    </>
  )
}
