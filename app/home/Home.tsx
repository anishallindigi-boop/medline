import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SecSection from './SecSection';
import MarqueeSection from './MarqueeSection';
import CounterSection from './CounterSection';
import TopServiceSection from './TopServiceSection';
import ServiceSection from './ServiceSection';
import AppointmentSection from './AppointmentSection';
import TeamSection from './TeamSection';
import TpaPanel from './TpaPanel';

const Home = () => {
  return (
    <>
    <HeroSection/>
    <CounterSection/>
    <SecSection/>
    <AboutSection/>
    <TpaPanel/>
    <MarqueeSection/>
    <TopServiceSection/>
    <ServiceSection/>
    <TeamSection/>
    <AppointmentSection/>
    </>
  )
}

export default Home