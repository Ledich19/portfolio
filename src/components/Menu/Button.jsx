import React from 'react'
import './Button.scss'

const Button = ({ className, toglable }) => {

  return (
    <div onClick={toglable} className={`app-button ${className}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Button