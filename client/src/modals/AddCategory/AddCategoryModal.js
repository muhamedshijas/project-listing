import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBInput } from 'mdb-react-ui-kit'
import { MDBFile } from 'mdb-react-ui-kit';
import './AddCategoryModal.css'
import { RiCloseLine } from "react-icons/ri";
import axios from 'axios';

function AddCategoryModal({ setShowModal }) {

    const [categoryType, setCategoryType] = useState('');
    const [mainCategory, setMainCategory] = useState('');{}
    const [parentCategory, setParentCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');

    const handleCategoryTypeChange = (e) => {
        setCategoryType(e.target.value);
    };
    async function handleSubmit(){
        if(categoryType=='main'){
            console.log("main")
            await axios.post("/addCategory",{mainCategory})
        }else{
            console.log("sub")
            await axios.post('/addcategory',{subCategory,parentCategory})
        }
    }
    return (
        <div className='add-category-main'>
            <div className="add-category">
                <div className="close" > <RiCloseLine className='close-icon' onClick={() => { setShowModal(false) }} /> </div>
                <h1>Add Category</h1>

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
                      <MDBInput
                        label="Parent Category Name"
                        value={parentCategory}
                        onChange={(e) => setParentCategory(e.target.value)}
                        type="text"
                      />
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