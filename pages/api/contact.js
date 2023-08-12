
import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const {name, lastname, email, message} = req.body

  const user = process.env.user;

  const data = {
    name, lastname, email, message
  }
}

  const transporter = nodemailer.createTransport({
    host: "smtp.gamil.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'neobaholo11@gmail.com',
      pass: 'forthefearless12',
    }
  });

  try {
  
    const mail = await transporter.sendMail({
      from: user,
      to: "neobaholo11@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
      <p>Name: ${name}</p>
      <p>Last Name: ${lastname}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent: ", mail.messageId)

    res.status(200).json({message: "success"});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Could not send the email. Your message was not sent.",
    });
}

