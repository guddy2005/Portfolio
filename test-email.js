const nodemailer = require('nodemailer');

async function runTest() {
  // --- IMPORTANT ---
  // Paste your credentials from your .env.local file here
  const user = 'guddy0004@gmail.com';
  const pass = 'hqivvowhdynucxrr'; // Use the password WITHOUT spaces
  // -----------------

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass,
    },
  });

  console.log('Attempting to verify credentials with Nodemailer...');

  try {
    await transporter.verify();
    console.log('✅ Success! Your credentials are correct and Nodemailer can connect to Gmail.');
  } catch (error) {
    console.error('❌ Error! Nodemailer could not connect. The problem is your password or Google Security.');
    console.error('--- Full Error Message ---');
    console.error(error);
  }
}

runTest();