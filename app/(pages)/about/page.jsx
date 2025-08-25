import Intro from '@/components/about/Intro'
import Results from '@/components/about/Results'
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
    </>
  )
}
