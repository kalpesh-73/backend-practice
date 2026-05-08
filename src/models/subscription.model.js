import mongoose, { Schema } from "mongoose";

const subcriptionschema=new Schema({
 subscriber:{
    type:Schema.Types.ObjectId, //one who is subscribing
    ref:"User"
 },
 channel:{
    type:Schema.Types.ObjectId, //whom to subscribing
    ref:"User"

 }
},{timestamps:true})

export const Subscription=mongoose.model("Subscription",subcriptionschema)