import React from 'react'
import Item from './Item'
import './List.scss'
import Photo from './Photo'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { AiOutlineDesktop } from 'react-icons/ai'
import { AiOutlineIdcard } from 'react-icons/ai'


const List = ({ className }) => {


  return (
    <div className={`list ${className}`}>

      <Photo />

      <Item href='/#home' text='&#60;home&#47;&#62;' icon={<AiOutlineHome />} />


      <Item href='/#about' text='&#60;about_me&#47;&#62;' icon={<AiOutlineUser />} />

      <Item href='/#skils' text='&#60;skils&#47;&#62;' icon={<AiOutlineCreditCard />} />

      <Item href='/#projects' text='&#60;projects&#47;&#62;' icon={<AiOutlineDesktop />} />

      <Item href='/#achievements' text='&#60;achievements&#47;&#62;' icon={<AiOutlineIdcard />} />


    </div>
  )
}

export default List