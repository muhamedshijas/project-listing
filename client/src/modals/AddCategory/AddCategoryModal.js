import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBInput } from 'mdb-react-ui-kit'
import { MDBFile } from 'mdb-react-ui-kit';
import './AddCategoryModal.css'
import { RiCloseLine } from "react-icons/ri";
import axios from 'axios';

function AddCategoryModal({ setShowModal,categories,setRefresh,refresh}) {

    const [categoryType, setCategoryType] = useState('');
    const [mainCategory, setMainCategory] = useState(''); { }
    const [parent, setParent] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [errMessage, setErrMessage] = useState('')

  
    const handleCategoryChange = (e) => {
    setParent(e.target.value);
  };
    async function handleSubmit() {
        if (categoryType == 'main') {
            console.log("main")
            const response = await axios.post("/category/addcategory", { mainCategory })
            console.log(response);
            if (!response.data.err) {
                setRefresh(!refresh)
                setShowModal(false)
            } else {
                setErrMessage(response.data.message)
                console.log("errr")
            }
        } else {
            console.log("sub")
            await axios.post('/category/addsubcategory', { subCategory, parent })
        }
    }
    return (
        <div className='add-category-main'>
            <div className="add-category">
                <div className="close" > <RiCloseLine className='close-icon' onClick={() => { setShowModal(false) }} /> </div>
                <h1>Add Category</h1>
                {
                    errMessage &&
                    <div className="login-row" style={{ justifyContent: "flex-start" }}>
                        <p className='text-danger'>{errMessage}</p>
                    </div>
                }
                <MDBDropdown>
                    <MDBDropdownToggle caret color="primary">
                        Select Category Type
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                        <MDBDropdownItem onClick={() => setCategoryType('main')}>Main Category</MDBDropdownItem>
                        <MDBDropdownItem onClick={() => setCategoryType('sub')}>Sub Category</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>

                {categoryType === 'main' && (
                    <div className="main-category">
                        <MDBInput
                            label="Main Category Name"
                            value={mainCategory}
                            onChange={(e) => setMainCategory(e.target.value)}
                            type="text"
                        />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                )}

                {categoryType === 'sub' && (
                    <div className='sub-category'>
                        <select name="" id="" onChange={handleCategoryChange}>Choose Category 
                        {
                            categories.map((item)=>{
                                return<option value={item._id}>{item.categoryName}</option>
                            })
                        }
                        </select>
                        <MDBInput
                            label="Sub Category Name"
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}
                            type="text"
                        />
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AddCategoryModal 