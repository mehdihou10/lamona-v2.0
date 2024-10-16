import Email from "vercel-email";

export const sendEmail = async (html, email, subject) => {


  try {

    await Email.send({
      to: email,
      from: process.env.USER_EMAIL,
      subject,
      html
    })


  } catch (error) {
    console.error('Error sending email:', error);
  }
};
