import React from 'react'
import Skills from './Skills/Skills'
import WhyInfolanze from './WhyInfolanze/WhyInfolanze'
import AboutHero from './AboutHero/AboutHero'
import MissionAndVission from './MissionAndVission/MissionAndVission'
import OurTeam from './OurTeam/OurTeam'
import Founder from './Founder/Founder'

function AboutSection() {
  return (
    <div>
      <AboutHero/>
      {/* <Skills/> */}
      <WhyInfolanze/>
      <MissionAndVission/>
        
      <OurTeam/>
      <Founder/>
      
    </div>
  )
}

export default AboutSection