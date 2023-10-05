import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
function HomePage() {
 
  return (
    <div>
    <Navbar/>
    <Home/>
    </div>
  )
}

export default HomePage