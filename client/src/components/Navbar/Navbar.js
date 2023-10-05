import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='nav'>
    
    <div className="logo">
    <h4>Product Info</h4>
    <h4>Admin Dashboard</h4>
    </div>
    <div className="links">
    <ul>
    <li>Dashboard</li>
    <li>Manage Products</li>
    <li>Manage Categories</li>
    </ul>
    </div>
  
    </div>
  )
}

export default Navbar