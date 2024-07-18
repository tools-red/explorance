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

const sendPurchaseMail = async (to: string, purchase_id: string) => {
  const subject = `Indibliss Products Purchase Confirmed - ${purchase_id}`;
  const html = `<div>
  <p>Thank you for shopping at Indibliss, we hope to see you again too !!</p>
  <p>Your Purchase ID is ${purchase_id}</p>
  </div>`;

  await sendMail({ to, subject, html });
};

export { sendPurchaseMail };
