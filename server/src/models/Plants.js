import { Schema , model } from "mongoose";

const plantSchema = new Schema({
    name:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },
},{
    timestamps:true
})

const Plant = model("Plant",plantSchema)
export default Plant