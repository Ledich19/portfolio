import React from 'react'
import './Item.scss'

const Item = ({ text, icon , href }) => {

  return (
    <a href={href} className='item'>
      {icon}
      <div>{text}</div>
    </a>
  )
}

export default Item