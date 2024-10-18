// import {client} from '@/postmark'

// export const sendEmail = async (html, email, subject) => {


//   try {

//     await client.sendEmail({
//       "From": "mehdi.houari@univ-constantine2.dz",
//       "To": email,
//       "Subject": subject,
//       "HtmlBody": html
//     })

//     console.log("Email sent")


//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

import nodemailer from 'nodemailer';

export const sendEmail = async (html, email, subject) => {
  try {
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: email,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } catch (err) {
    console.log("Error sending email:", err);
  }
};
