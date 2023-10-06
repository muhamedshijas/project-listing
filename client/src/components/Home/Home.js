import React from 'react'
import image from '../../assets/images/Ecommerce.png'
import {Link} from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div className='home'>
    <img src={image} alt="" />
    <h1>Welcome to Dashboard</h1>
    <div className="btns">
    <button>Manage Products</button>
    <Link to='/addcategory'>
    <button className='btn-2'>Manage Categories</button>
    </Link>
    </div> 
    </div>
  )
}

export default Home