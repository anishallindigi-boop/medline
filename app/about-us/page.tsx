import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import MissionVisionSection from './MissionVisionSection'
import TestimonialPage from './TestimonialSection'
import AboutHospitalSection from './AboutHospitalSection';
import ServicesSection from '../services/ServicesSection'

const page = () => {
  return (
    <>
    <HeroSection/>
    <AboutHospitalSection/>
    <AboutSection/>
    <MissionVisionSection/>
    <ServicesSection/>
    {/* <TestimonialPage/> */}
    </>
  )
}

export default page