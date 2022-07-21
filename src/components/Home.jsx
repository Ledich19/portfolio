import React from 'react'
import './Home.scss'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";



const Home = ({ className }) => {
 

  return (
    <div className='app-home'>
      <div className='circle__0'></div>
      <div className='circle__1'><FaCss3Alt/></div>
      <div className='circle__2'><FaHtml5/></div>
      <div className='circle__3'><FaReact/></div>
      <div className='circle__4'><FaNodeJs/></div>
    </div>
  )
}

export default Home