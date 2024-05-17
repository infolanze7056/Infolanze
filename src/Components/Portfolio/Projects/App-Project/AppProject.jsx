import React from 'react'
import AppHero from './Components/AppHero'
import AppAbout from './Components/AppAbout'
import AppProjects from './Components/AppProjects'

const AppProject = () => {
  return (
    <div>
      <AppHero/>
      <AppAbout/>
      <AppProjects/>
    </div>
  )
}

export default AppProject