import React from 'react'
import Item from './Item'
import './List.scss'
import Photo from './Photo'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import { AiOutlineDesktop } from "react-icons/ai";
import { Link } from "react-router-dom";

const List = ({ className }) => {
 

  return (
    <div className={`list ${className}`}>

     <Photo/>
     <Link to="/">
        <Item text='&#60;home&#47;&#62;' icon={<AiOutlineHome/>}/>
     </Link>
     <Link to="/about">
     <Item text='&#60;about_me&#47;&#62;' icon={<AiOutlineUser/>}/>
     </Link>
     <Link to="/skils">
     <Item text='&#60;skils&#47;&#62;' icon={<AiOutlineCreditCard/>}/>
     </Link>
     <Link to="/projects">
     <Item text='&#60;projects&#47;&#62;' icon={<AiOutlineDesktop/>}/>
     </Link>


    </div>
  )
}

export default List