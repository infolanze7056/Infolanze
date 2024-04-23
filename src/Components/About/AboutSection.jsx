import React from 'react'
// import Skills from './Skills/Skills'
import WhyInfolanze from './WhyInfolanze/WhyInfolanze'
import AboutHero from './AboutHero/AboutHero'
import MissionAndVission from './MissionAndVission/MissionAndVission'

function AboutSection() {
  return (
    <div>
      <AboutHero/>
      {/* <Skills/> */}
      <MissionAndVission/>
      <WhyInfolanze/>  
    </div>
  )
}

export default AboutSection