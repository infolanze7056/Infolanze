import React from 'react'
import AboutSection from '../Components/About/AboutSection'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <div>
      <Helmet>
        <title>About | Infolanze</title>
      </Helmet>
      <AboutSection />
    </div>
  )
}

export default About