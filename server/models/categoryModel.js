import mongoose from "mongoose"
const CategorySchema = new mongoose.Schema({
    categoryName:{
        type:String
    },
    categoryType:{
        type:String
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
      },

})

const categoryModel=mongoose.model("Categories", CategorySchema)
export default categoryModel