import React from 'react'
import Hero from '../components/homeComponents/Hero'
import Features from '../components/homeComponents/Features'
import HowItWorks from '../components/homeComponents/HowItWorks'
import Testimonials from '../components/homeComponents/Testimonials'
import CallToAction from '../components/homeComponents/CallToAction'
import Footer from '../components/homeComponents/Footer'
import Header from '../components/homeComponents/Header'

function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Features />
    <HowItWorks />
    <Testimonials />
    <CallToAction />
    <Footer />
    </>
  )
}

export default Home