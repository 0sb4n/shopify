import { NextResponse } from "next/server";
import  jwt  from "jsonwebtoken";

export const middleware= async (req:any)=>{
const token = req.cookies.get('token')?.value;
if (!token){
    return NextResponse.redirect(new URL('/admin-67-h456',req.url))
}
try {
  jwt.verify(token,process.env.JWT_SECRET!) ;
  return NextResponse.next();
} catch (error)
 {
  return NextResponse.redirect(new URL ('/Contact',req.url))  
}
}
export const config = {
    matcher:[
        '/admin-67-h456/dashboard/:path*'
    ]
}