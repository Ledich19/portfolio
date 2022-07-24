import React from 'react'
import Home from '../Home'
import './Bodi.scss'

import Projects from '../Projects/Projects'
import AboutMe from '../AboutMe/AboutMe'

const Body = () => {

  return (
    <div className='app-body'>

      <Home  id='home' />
      <Projects id='projects' />
      <AboutMe id='about' />


    </div>
  )
}

export default Body