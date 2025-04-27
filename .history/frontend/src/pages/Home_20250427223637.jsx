import React from 'react'
import Header from '../components/Header'
import HeroSection from '@/components/Hero'
import TestimonialSection from '@/components/ReviewsFeed'
import WhyUsSection from '@/components/WhyUs'
import Service from '@/components/Service'
import Footer from '@/components/Footer'
import InstagramFeed from '@/components/InstagramFeed'
function Home() {
  return (
    <div className="min-h-screen">
     
      <Header/>
    <HeroSection/>
   
    <WhyUsSection/>
    <Service/>
    <InstagramFeed/>

    <TestimonialSection/>
    <Footer/>
    </div>
  )
}

export default Home
