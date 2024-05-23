import React from 'react'
import WebHero from './Components/WebHero'
import WebAbout from './Components/WebAbout'
import WebProjects from './Components/WebProjects'

const WebProject = () => {
  return (
    <div className='font-family'>
      <WebHero/>
      <WebAbout/>
      <WebProjects/>
    </div>
  )
}

export default WebProject