import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import './AddCategory.css'
import eletronics from '../../assets/images/Eletronics.png'
import AddCategoryModal from '../../modals/AddCategory/AddCategoryModal'
import axios from 'axios'
import { MDBIcon } from 'mdb-react-ui-kit'
import Swal from 'sweetalert2'
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
  async function handleDelete(id){
    Swal.fire({
      title: 'Are you sure? ',
      text: "Delete this URL!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7e3af2',
      cancelButtonColor: '##a8a8a8',
      confirmButtonText: 'Yes, Logout!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.get("/category/deletecategory/"+id)
        setRefresh(!refresh)
      }
    })
  }
  return (
    <div className="category-main">
      <div className="category-cards">
        <Row className="category-row">

          {
            categories.map((item,index ) => {
              return <Col xs={6} md={3} className="card-grp" >
                <div className="cards">
                  <b>{item.categoryName}</b>
                  <div className="icons">
                  <MDBIcon fas icon="trash-alt" onClick={()=>handleDelete(item._id)} />
                  <MDBIcon fas icon="edit" />
                  </div>
                </div>
              </Col>
            })
          }
        </Row>

      </div>
      <div className="btns">
        <button onClick={handleModal}>Add Category</button>
      </div>
      {
        showModal && <AddCategoryModal setShowModal={setShowModal} categories={categories} setRefresh={setRefresh} refresh={refresh} />
      }
    </div>
  )
}

export default AddCategory