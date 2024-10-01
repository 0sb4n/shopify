// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { to, subject, message, imageBase64 } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider (e.g., Gmail, SMTP, etc.)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Define the email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html: `
          <h1>${subject}</h1>
          <p>${message}</p>
          ${imageBase64 ? `<img src="${imageBase64}" alt="Image" />` : ''}
        `, // Embed image directly as Base64 in the HTML
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
