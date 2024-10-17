
import nodemailer from "nodemailer"
export const sendOtpEmail = async (email:string,otp:string)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:process.env.GMAIL_USER ,
          pass: process.env.GMAIL_PASS,
        },
      });
      const mailOptions = {
        from:process.env.GMAIL_USER,
        to: email,
        subject: 'your Admin Login OTP',
        text:`your OTP code is: ${otp} `
        ,
      };
    await transporter.sendMail(mailOptions);
}
