import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: `"ALA TELECOM " <${process.env.SMTP_USER}>`,
    to: "gdeoliveira.1999@gmail.com, g.prado0102@gmail.com",
    replyTo: req.body.email,
    subject: `Ala Telecom - ${req.body.name}`,
    text: req.body.message,
  });

  res.send(info);
}
