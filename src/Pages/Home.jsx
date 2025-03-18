import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import ServiceSection from '../Components/Home/ServiceSection'
import AboutSection from '../Components/Home/AboutSection'
import Process from '../Components/Home/Process'
import Techonologys from '../Components/Home/Techonologys'
import ContactUS from '../Components/Home/ContactUS'
import Testimonials from '../Components/Home/Testimonials'
import CompanyLogo from '../Components/Home/CompanyLogo'
import Whatsapp from '../CommonComponent/Whatsapp'

function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <Process />
      <Techonologys />
      <ContactUS />
      <CompanyLogo />
      {/* <Testimonials /> */}
      <Whatsapp />
    </div>
  )
}

export default Home