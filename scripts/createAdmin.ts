
import { connectToDb } from "@/lib/utils/database/db";
import Admin from "@/lib/utils/models/admin.model";
import bcrypt from "bcrypt"

export async function createAdmin (){
try {


const email = process.env.ADIMN_EMAIL
const password: string | undefined = process.env.ADMIN_PASSWORD;
const safePassword: string = password || '';
const salt =await bcrypt.genSalt(10);
const hashedPassword =await bcrypt.hash(safePassword, salt);
const newAdmin = new Admin({
    email:email,
    password: hashedPassword,
})
await newAdmin.save();
console.log('admin created successfully')


    
} catch (error) {
    console.error('admin created faild', error)
    
}
}
