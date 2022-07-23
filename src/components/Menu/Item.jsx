import React from 'react'
import './Item.scss'

const Item = ({ text, icon }) => {

  return (
    <div className='item'>
      {icon}
      <div>{text}</div>
    </div>
  )
}

export default Item