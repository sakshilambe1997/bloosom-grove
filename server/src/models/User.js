import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fullName :{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:string,
        unique:true
    },

    address:{
        type:string,
        required:true
    },

    gender:{
        type:string,
        enum:["male","female"],
        default:"male"
    },
},{
    timestamps:true
})

const User = model("User",userSchema)
export default User;