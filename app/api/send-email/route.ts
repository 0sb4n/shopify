"use server"
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';



export async function POST(request: Request) {
    const { email, phone, name,category, imageUrl } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:process.env.GMAIL_USER ,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: 'New Client Request',
      html: `
        <h3>New Client Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Category:</strong> ${category}</p>
        <img src="${imageUrl}" alt="Client Image" style="max-width: 400px;">
      `,
    };

 
    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!' });
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
      }
    }

