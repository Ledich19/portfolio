import React from 'react'
import Home from '../Home'
import './Bodi.scss'
import { Route, Routes } from "react-router-dom";
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';

const Body = ({ className }) => {
 

  return (
    <div className='app-body'>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects/> } />
      <Route path="/about" element={<AboutMe/> } />

      </Routes>
    </div>
  )
}

export default Body