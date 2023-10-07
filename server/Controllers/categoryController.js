import categoryModel from "../models/categoryModel.js";

export async function addCategory(req, res) {
    try {
        const name = req.body.mainCategory
        console.log(name);
        const categoryExist = await categoryModel.findOne({ categoryName: name }).lean()
        console.log(categoryExist)
        if (categoryExist) {
            console.log("exist");
            res.json({ err: true, message: "category already exist" })
        } else {
            console.log("successfully added");
            const newCategory = await categoryModel.create({ categoryName: name, categoryType: "main" });
            res.json({ err: false, message: "category added successffully" })

        }
    } catch (err) {
        console.log(err);
        res.json({ err: true, message: "an error occured" })
    }
}
export async function addSubCategory(req, res) {
    try {
        console.log(req.body);
        const name = req.body.subCategory
        const categoryExist = await categoryModel.findOne({ categoryName: name ,parent:req.body.parent}).lean()
        if (categoryExist) {
            console.log("exist");
            res.json({ err: true, message: "category already exist" })
        } else {
            const newCategory = await categoryModel.create({ categoryName: req.body.subCategory, parent: req.body.parent, categoryType: "sub" });
            console.log("dgsgdshhj");
            res.json({ err: false, message: "category added successffully" })

        }

    } catch (err) {
        console.log(err)
    }
}

export async function getCatgories(req, res) {
    const mainCategories = await categoryModel.find({ categoryType: "main" }).lean()
    const subCategories = await categoryModel.find({ categoryType: "sub" }).populate('parent').lean()
    console.log(subCategories);
    const categories = await categoryModel.find({}).lean()
    res.json({ err: false, mainCategories, subCategories, categories })
}
export async function deleteCategory(req, res) {
    try {
        const _id = req.params.id
        console.log(_id)
        await categoryModel.findByIdAndDelete({ _id })
        console.log("deleted successfully")
        res.json({ err: false, message: "category deleted succesfully" })
    } catch (err) {
        console.log(err)
    }
}