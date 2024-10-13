import nodemailer from 'nodemailer';

export const sendEmail = async (html, email, subject) => {
  // Destructure the body directly without parsing it again

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
    secure: true,
  });

  try {
    // Verify connection configuration
    await transporter.verify();

    const mailData = {
      from: {
        name: `Mehdi Hou`,
        address: process.env.USER_EMAIL,
      },
      replyTo: email,
      to: email,
      subject: subject,
      text: html,
      html: `${html}`,
    };

    // Send mail
    const info = await transporter.sendMail(mailData);
    console.log(info);


  } catch (error) {
    console.error('Error sending email:', error);
  }
};
