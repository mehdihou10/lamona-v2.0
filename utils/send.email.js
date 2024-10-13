export const sendEmail = async (html, email, subject) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASSWORD,
        },
    });

    const mailOptions = {
        from: {
            name: `Mehdi Hou`,
            address: process.env.USER_EMAIL,
        },
        replyTo: email,
        to: email,
        subject: subject,
        html: html,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
