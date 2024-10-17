
import { Schema, models,model } from "mongoose";
const adminSchema= new Schema({
    email:{
        require:true,
        type:String
    },
  password:{
        require:true,
        type:String
    },
    otp:{type:String},
    otpExpired:{type:Date}
})
const Admin =models?.Admin || model('Admin', adminSchema)
export default Admin;