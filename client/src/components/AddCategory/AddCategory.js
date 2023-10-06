import React, { useState } from 'react'
import './AddCategory.css'
import eletronics from '../../assets/images/Eletronics.png'
import AddCategoryModal from '../../modals/AddCategory/AddCategoryModal'
function AddCategory() {
  const [showModal,setShowModal]=useState(false)
  function handleModal(){
    setShowModal(true)
  }
  return (
    <div className="category-main">
    <div className="category-cards">
    <div className="cards">
    <b>Eletronics</b>
    </div>
    <div className="cards">
    <b>Eletronics</b>
    </div>
    <div className="cards">
    <b>Eletronics</b>
    </div>
    <div className="cards">
    <b>Eletronics</b>
    </div>
    <div className="cards">
    <b>Eletronics</b>
    </div>
    </div>
    <div className="btns">
    <button onClick={handleModal}>Add Category</button>
    </div>
    {
      showModal&&<AddCategoryModal setShowModal={setShowModal}/>
    }
    </div>
  )
}

export default AddCategory