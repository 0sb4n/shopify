import { connectToDb } from "../utils/database/db"
import Admin from "../utils/models/admin.model";

export const getStoredOtp= async (id:string)=>{
await connectToDb();
try {
    const admin = await Admin.findById(id);
    if (!admin || !admin.otp || !admin.otpExpired){
        return{otp :null,expired:true}
    }
    const now = new Date();
    const isExpired= admin.otpExpired <now;
    return{otp:admin.otp,expired:isExpired}
} catch (error) {
    console.error('error fetching stored OTP:', error)
    return{otp:null ,expired:true}
}
}