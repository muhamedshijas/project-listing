import express from 'express';
import { addCategory, addSubCategory, deleteCategory, getCatgories } from '../Controllers/categoryController.js';

const router=express.Router();
router.post('/addcategory',addCategory)
router.get('/getcategory',getCatgories)
router.post('/addsubcategory',addSubCategory)
router.get('/deletecategory/:id',deleteCategory)
export default router