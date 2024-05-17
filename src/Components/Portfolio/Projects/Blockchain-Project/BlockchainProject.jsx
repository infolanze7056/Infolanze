import React from 'react'
import BlockHero from './Components/BlockHero'
import BlockProjects from './Components/BlockProjects'
import BlockAbout from './Components/BlockAbout'

const BlockchainProject = () => {
  return (
    <div>
      <BlockHero/>
      <BlockAbout/>
      <BlockProjects/>
    </div>
  )
}

export default BlockchainProject