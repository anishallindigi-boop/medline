import React from 'react'
import HeroSection from './HeroSection'
import AppointmentSection from '../home/AppointmentSection'
import ContactServiceSection from './ContactServiceSection'
import GoogleMapSection from './GoogleMapSection'

const page = () => {
  return (
<>
<HeroSection/>
<ContactServiceSection/>
<GoogleMapSection/>
<AppointmentSection/>
</>
  )
}

export default page