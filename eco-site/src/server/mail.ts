import nodemailer from "nodemailer";
import { env } from "~/env.mjs";
import { SendMailType } from "~/types/mail";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: env.GMAIL_TRANSPORTER_SENDER_MAIL,
    pass: env.GMAIL_TRANSPORTER_APP_PASSWORD,
  },
});

export const sendMail = async ({
  to,
  subject,
  html,
  attachments,
}: SendMailType) => {
  try {
    const info = await transporter.sendMail({
      from: '"Amil Sindhis" <amilsindhis@gmail.com>',
      to,
      subject,
      html,
      attachments: attachments ?? [],
    });

    console.log("Message sent: %s", info?.messageId);
  } catch (e) {
    console.error("Error sending mail: ", e);
  }
};
