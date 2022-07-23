import React from 'react'
import './Footer.scss'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaViber } from 'react-icons/fa'


const Footer = () => {

  return (
    <div className='footer'>
      <FaFacebook className='footer__icon'/>
      <FaGithub className='footer__icon'/>
      <FaTelegramPlane className='footer__icon'/>
      <FaViber className='footer__icon'/>
    </div>
  )
}

export default Footer