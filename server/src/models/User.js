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
        
    }


})