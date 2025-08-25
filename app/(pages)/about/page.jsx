import AboutQuote from '@/components/about/AboutQuote'
import Intro from '@/components/about/Intro'
import Leadership from '@/components/about/Leadership'
import Results from '@/components/about/Results'
import Values from '@/components/about/Values'
import CTA from '@/components/global/CTA'
import Navigation from '@/components/global/Navigation'
import PageHero from '@/components/global/PageHero'
import React from 'react'

export default function page() {
  return (
    <>
    <Navigation />
    <PageHero />
    <Intro />
    <Results />
    <Values />
    <Leadership />
    <AboutQuote />
    <CTA />
    </>
  )
}
