import React, { useEffect, useState } from 'react'
import './MyAcaunts.scss'
import { FaAngleUp } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

const MyAcaunts = () => {
  const [visible, setVisible] = useState(false)
  const [finish, setFinish] = useState(true)
  useEffect(() => {
    if (!finish) {
      return
    }
    setFinish(false)

    if (visible) {
      const items = document.querySelectorAll('.my-acaunts__item')
      items.forEach((e, i) => {
        setTimeout(function () {
          e.style.opacity = '1'
        }, 100 * ++i)
      })
      setTimeout(function () {
        setFinish(true)
      }, items.length * 100)
    } else {
      const items = document.querySelectorAll('.my-acaunts__item')
      items.forEach((e, i) => {
        setTimeout(function () {
          e.style.opacity = '0'
        }, items.length * 100 - (100 * ++i))
      })
      setTimeout(function () {
        setFinish(true)
      }, items.length * 100)
    }


  }, [visible])

  const toglableVisible = () => {
    if (!finish) {
      return
    }
    setVisible(!visible)

  }

  return (

    <div className='my-acaunts'>
      <div className='my-acaunts__title'>
        <div className='my-acaunts__text'>
          &#60;Информация обо мне/&#62;
        </div>
        <div
          onClick={toglableVisible}
          className={`my-acaunts__btn ${visible ? '_active' : ''}`}>
          <p>
            {!visible ? 'my links' : <FaAngleUp />}
          </p>

        </div>
        <div className={`my-acaunts__footer ${visible ? '_active' : ''}`}>

        </div>
      </div>

      <ul className={`my-acaunts__list ${visible ? '_active' : ''}`} >
        <li className='my-acaunts__item'>
          <FaGithub />__
          &#60;git_hab/&#62; </li>

        <li className='my-acaunts__item'>
          <FaLinkedin />__
          &#60;linkedIn/&#62;</li>
        <li className='my-acaunts__item'>
          <FaInstagram />__
          &#60;instagram/&#62;</li>
        <li className='my-acaunts__item'>
          <FaFacebookSquare />__
          &#60;facebook/&#62;</li>
      </ul>
    </div>

  )
}

export default MyAcaunts