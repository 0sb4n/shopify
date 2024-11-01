"use server"
import { connectToDb } from "@/lib/utils/database/db";
import User from "@/lib/utils/models/user.model";

import bcrypt from "bcrypt"

import { NextRequest, NextResponse } from "next/server";
export async function POST(req:NextRequest){
await connectToDb();
const {name, email, password} = await req.json();
if (!name|| !email || !password) {
    return NextResponse.json({error:"all fields are required"})
}
try {
    const existingUser = await User.findOne({email});
    if(existingUser){
        return NextResponse.json({success:false,error:"user already exists"})
    }
    const hashedPassword =await bcrypt.hash(password,10)
    const user = new User({name,email,password:hashedPassword});
    await user.save();

} catch (error) {
    return NextResponse.json({success:false,  error:`error creating Account ${error}`,})
}
 }