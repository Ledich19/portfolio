import React from 'react'
import './Project.scss'
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Project = ({
  className,
  title,
  image,
  tehnologies,
  description,
  gitLink,
  showLink }) => {

  return (
    <div className={`project-item ${className}`}>
      <div className={`project-item__front ${className}`}>
        <div className='project-item__header'>
          <div className='project-item__title'>&#60;{title}/&#62;</div>
          <div className='project-item__tehnologies'>
            {
              tehnologies.map((t) => <span key={t}>{t}</span>)
            }
          </div>
        </div>
        <div className='project-item__photo'>
          <img src={image} alt='project scrin' />

          <div className='project-item__info'>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='project-item__links'>
              <a rel='noreferrer' target='_blank' href={gitLink}>
                <FaGithub />
              </a>
              <a rel='noreferrer' target='_blank' href={showLink}>
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Project