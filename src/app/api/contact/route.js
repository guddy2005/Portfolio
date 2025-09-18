// src/app/api/contact/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ADD THIS LINE
export const dynamic = 'force-dynamic';

export async function POST(request) {
  console.log('API route hit. Processing request...');

  try {
    const { name, email, subject, message } = await request.json();
    console.log('Received data:', { name, email, subject });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Contact: ${subject}`,
      html: `
        <h2>New Message from your Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    console.log('Attempting to send email with Nodemailer...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}