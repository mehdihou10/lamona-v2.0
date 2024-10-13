import nodemailer from 'nodemailer';

export const sendEmail = (html, email, subject) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_EMAIL,    // Using environment variables for security
            pass: process.env.USER_PASSWORD
        }
    });

    const mailOptions = {
        from: {
            name: `Mehdi Hou`, // The sender's name
            address: process.env.USER_EMAIL,  // The sender's email
        },
        replyTo: email,                     // Email of the person who filled out the form
        to: email,                            // The recipient's email
        subject: subject,                     // Subject of the email
        html: html,                           // Message body in HTML format
    };

    transporter.sendMail(mailOptions, (err, success) => {
        if (err) {
            console.error('Error sending email:', err);
        } else {
            console.log('Email sent successfully:', success);
        }
    });
};
