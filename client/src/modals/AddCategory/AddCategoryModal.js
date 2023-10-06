import React from 'react'
import './AddCategoryModal.css'
import { RiCloseLine } from "react-icons/ri";

function AddCategoryModal({setShowModal}) {
    
  return (
    <div className='add-category-main'>
    <div className="add-category">
    <div className="close" > <RiCloseLine className='close-icon' onClick={()=>{setShowModal(false)}}/> </div>
    <h1>Add Category</h1>
    <input type="email" name="" id="" />
    </div>
    </div>
  )
}

export default AddCategoryModal