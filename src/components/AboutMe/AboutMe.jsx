import React from 'react'
import './AboutMe.scss'
import MyAcaunts from './MyAcaunts'
import Text from './Text'


const AboutMe = () => {


  return (
    <div className='app-about-me'>
      <div className="app-about-me__title">ABOUT ME</div>
      <div className="app-about-me__quote">A journey of a thousand miles begins with a single step</div>
      <div className="app-about-me__body">
        <div className="app-about-me__column-pnoto column-pnoto">
          <div className="column-pnoto__photo">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToripYcz2V-E40EqjFOAUnr2JdtUnKdtYHNw&usqp=CAU' alt='project scrin' />
          </div>

          <MyAcaunts/>

        </div>
        <div className="app-about-me__column-text column-pnoto">

          <Text/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe