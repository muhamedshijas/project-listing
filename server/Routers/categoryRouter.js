import express from 'express';
import { addCategory, addSubCategory, getCatgories } from '../Controllers/categoryController.js';

const router=express.Router();
router.post('/addcategory',addCategory)
router.get('/getcategory',getCatgories)
router.post('/addsubcategory',addSubCategory)
export default router