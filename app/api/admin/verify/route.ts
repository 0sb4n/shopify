import { getStoredOtp } from "@/lib/actions/getStoredOtp";
import { NextRequest,NextResponse } from "next/server";
export async function POST(req:NextRequest,) {
    
    const {otp,adminId}=await req.json();
    const storedOtp = await getStoredOtp(adminId);
    if(storedOtp !== otp){
        return NextResponse.json({messege:'invallid OTP'})
    }
    
    return NextResponse.json({messege:'otp verified'})

   

}