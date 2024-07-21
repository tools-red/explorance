import nodemailer from "nodemailer";
import { env } from "~/env.mjs";
import { type SendMailType } from "~/types/mail";

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
      from: '"Indibliss" <agency.redtools@gmail.com>',
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

export const sendPurchaseMail = async (to: string, purchase_id: string) => {
  const subject = `Indibliss Products Purchase Confirmed - ${purchase_id}`;
  const html = `<div>
  <p>Thank you for shopping at Indibliss, we hope to see you again soon !!</p>
  <p>Your Purchase ID is ${purchase_id}</p>
  </div>`;

  await sendMail({ to, subject, html });
};

export const sendDispatchedOrderMail = async (
  purchase_Id: string,
  to: string,
  customer_name: string
) => {
  const subject = `Your Purchase/Order #${purchase_Id} has been dispatched`;
  const html = `<div>
  <p>Dear ${customer_name},</p>
  <p>This mail is to inform you that your purchase/order #${purchase_Id} has been dispatched and will arrive at your doorstep in the next 5 to 6 days</p>
  <p>We thank you for shopping with us</p>
  </div>`;

  await sendMail({ to, subject, html });
};
