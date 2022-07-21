import React from 'react'
import Home from '../Home'
import './Bodi.scss'
import { Route, Routes } from "react-router-dom";

const Body = ({ className }) => {
 

  return (
    <div className='app-body'>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Home />} />

      </Routes>
    </div>
  )
}

export default Body