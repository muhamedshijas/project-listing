import React, { useEffect, useState } from 'react'
import './AddCategory.css'
import eletronics from '../../assets/images/Eletronics.png'
import AddCategoryModal from '../../modals/AddCategory/AddCategoryModal'
import axios from 'axios'
function AddCategory() {
  const [showModal, setShowModal] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    (
      async function () {
        try {
          const response = await axios.get('/category/getcategory')
          console.log(response.data)
          setCategories(response.data.categories)
        }
        catch (err) {
          console.log(err)
        }
      }
    )()
  }, [refresh])
  console.log(categories)
  function handleModal() {
    setShowModal(true)
  }
  return (
    <div className="category-main">
      <div className="category-cards">

        {
          categories.map((index, item) => {
            return <div className="cards">
              <b>Eletronics</b>
            </div>
          })
        }
      </div>
      <div className="btns">
        <button onClick={handleModal}>Add Category</button>
      </div>
      {
        showModal && <AddCategoryModal setShowModal={setShowModal} categories={categories} />
      }
    </div>
  )
}

export default AddCategory