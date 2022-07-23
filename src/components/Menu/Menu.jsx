import React, { useState } from 'react'
import Button from './Button'
import List from './List'
import Footer from './Footer'
import './Menu.scss'

const Menu = () => {
  const [visible , setVisible] = useState(true)

  return (
    <div className='app-menu'>
      <Button toglable={() => setVisible(!visible)} />
      {!visible || <List />}
      {!visible || <Footer/>}
    </div>
  )
}

export default Menu