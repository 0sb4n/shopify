

import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Admin from '@/lib/utils/models/admin.model';
import { sendOtpEmail } from '@/lib/utils/sendOtpEmail';
import { connectToDb } from '@/lib/utils/database/db';
export async function POST(request: Request){
    await connectToDb();
    const { email,password } = await request.json();
    const admin = await Admin.findOne({email});
   if (!admin){
    return NextResponse.json({messege:'wrong email or password'})

   }
   const isMatch = await bcrypt.compare(password,admin.password);
   if(!isMatch){
    return  NextResponse.json({messege:'wrong email or password'})
   }
   const token = jwt.sign({id:admin._id},process.env.JWT_SECRET!,{expiresIn:'15m'})
   const otp = Math.floor(1000 + Math.random()*9000).toString();
   const otpExpiresAt=new Date(Date.now() + 10 * 60 *1000)
   admin.otp=otp;
   admin.otpExpired=otpExpiresAt;
   await admin.save();
   await sendOtpEmail(admin.email,otp)
   const response= NextResponse.json({token,adminId:admin._id})
   response.cookies.set('token', token,{
    httpOnly:true,
    maxAge:15*60,
    path:'/'
   })
   return response
   

}
