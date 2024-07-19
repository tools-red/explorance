import { type Attachment } from "nodemailer/lib/mailer";

interface SendMailType {
  to: string;
  subject: string;
  html: string;
  attachments?: Attachment[];
}

export { type SendMailType };
