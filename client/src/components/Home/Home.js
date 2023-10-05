import React from 'react'
import image from '../../assets/images/Ecommerce.png'
import './Home.css'
function Home() {
  return (
    <div className='home'>
    <img src={image} alt="" />
    <h1>Welcome to Dashboard</h1>
    <div className="btns">
    <button>Manage Products</button>
    <button className='btn-2'>Manage Categories</button>
    </div> 
    </div>
  )
}

export default Home