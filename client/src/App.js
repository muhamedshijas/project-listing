import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import './App.css'
import HomePage from './pages/HomePage';
import AddCategoryPage from './pages/AddCategoryPage';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
function App() {
  axios.defaults.baseURL = "http://localhost:5000/";
  axios.defaults.withCredentials = true;
  
  return (
    <div classname="app">
    <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/addcategory' element={<AddCategoryPage/>}/>
        </Routes>
   </div>
  );
}

export default App;
