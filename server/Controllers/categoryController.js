import categoryModel from "../models/categoryModel.js";

export async function addCategory(req, res) {
    try {
        const name = req.body.mainCategory
        console.log(name);
        const categoryExist = await categoryModel.findOne({categoryName:name}).lean()
        console.log(categoryExist)
        if (categoryExist) {
            console.log("exist");
            res.json({ err: true, message: "category already exist" })
        } else {
            console.log("successfully added");
            const newCategory = await categoryModel.create({ categoryName: name });
            res.json({ err: false, message: "category added successffully" })

        }
    } catch (err) {
        console.log(err);
        res.json({ err: true, message: "an error occured" })
    }
}
export async function addSubCategory(req,res){
    try{
        console.log(req.body);
        const newCategory = await categoryModel.create({ categoryName: req.body.subCategory,parent:req.body.parent });
        console.log("dgsgdshhj");
    }catch(err){
        console.log(err)
    }
}

export async function getCatgories(req,res){
    const categories=await categoryModel.find({}).lean()
    console.log(categories)
    res.json({err:false,categories})
}