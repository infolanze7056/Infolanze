import React from 'react'
// import Skills from './Skills/Skills'
import WhyInfolanze from './WhyInfolanze/WhyInfolanze'
import AboutHero from './AboutHero/AboutHero'
import MissionAndVission from './MissionAndVission/MissionAndVission'
import OurTeam from './OurTeam/OurTeam'
import Founder from './Founder/Founder'
// import Whatsapp from '../../CommonComponent/Whatsapp'

function AboutSection() {
  return (
    <div>
      <AboutHero/>
      {/* <Skills/> */}
      <WhyInfolanze/>
      <MissionAndVission/>
        
      <OurTeam/>
      <Founder/>
      {/* <Whatsapp/> */}
      
    </div>
  )
}

export default AboutSection;